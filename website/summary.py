from flask import Blueprint
from .File_analysis import FileAnalysis
from flask import Blueprint, render_template, request, flash, jsonify, send_from_directory,  Response, send_file
from langdetect import detect
from weasyprint import HTML
from datetime import datetime
from io import StringIO
from flask import session
from flask import redirect
from werkzeug.utils import secure_filename
from collections import Counter
from flask import current_app
import chardet
import shutil
import tempfile
from html2image import Html2Image
import re
import os
import time
from PIL import Image, ImageDraw, ImageFont
import random
from sentiment_analyser import SentimentAnalyser
from Summariser import run_summarizer
from word_cloud_generator import WordCloudGenerator
from Keyword_collocation import KWICAnalyser
from checklanguage import LanguageChecker
import pandas as pd
import plotly.express as px
import threading
from os.path import splitext, basename
import string
import shutil
from nltk.corpus import stopwords
from nltk.tokenize import sent_tokenize
from .models import Feedback
from . import db
from nltk import sent_tokenize
from summa.summarizer import summarize as summa_summarizer
en_stopwords = list(stopwords.words('english'))
cy_stopwords = open('/freetxt/website/data/welsh_stopwords.txt', 'r', encoding='iso-8859-1').read().split('\n') # replaced 'utf8' with 'iso-8859-1'
STOPWORDS = set(en_stopwords + cy_stopwords+ ["a", "an", "the", "and", "or", "in", "of", "to", "is", "it", "that", "on", "was", "for", "as", "with", "by"])

PUNCS = string.punctuation

PUNCS += '''!→()-[]{};:"\,<>./?@#$%^&*_~'''
# Initialize a lock

fileanalysis_summary = Blueprint('fileanalysis_summary', __name__)


fileanalysis_summary.register_blueprint(FileAnalysis)

#### utilities
ALLOWED_EXTENSIONS = {'txt', 'csv', 'xls', 'xlsx','tsv'}
import os
os.environ["TRANSFORMERS_CACHE"] = "/freetxt/huggingface_cache"


from PIL import Image
logo_path = "/freetxt/website/static/images/logo.png"
def append_logo_to_image(image_path, logo_path, output_path):
    # Open the main image and the logo
    main = Image.open(image_path)
    logo = Image.open(logo_path)

    # Resize the logo if needed
    # Here, we're resizing the logo to have the same width as the main image, 
    # while maintaining its aspect ratio
    logo_width = main.width
    logo_height = int((logo_width / logo.width) * logo.height)
    logo = logo.resize((logo_width, logo_height))

    # Create a new image with the combined height of the main image and the logo
    combined = Image.new('RGB', (main.width, main.height + logo_height))
    combined.paste(main, (0, 0))
    combined.paste(logo, (0, main.height))

    # Save the resulting image
    combined.save(output_path)

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def sanitize_column_name(name):
    # This function will keep only alphanumeric characters and spaces, then replace spaces with underscores.
    sanitized = re.sub(r'[^a-zA-Z0-9 ]', '', name)
    return sanitized.replace(' ', '_')
date_formats = [
    '%Y-%m-%d',    # Year-Month-Day with dashes
    '%d/%m/%Y',    # Day/Month/Year with slashes
    '%m/%d/%Y',    # Month/Day/Year with slashes
    '%d-%m-%Y',    # Day-Month-Year with dashes
    '%d.%m.%Y',    # Day.Month.Year with dots
    '%d/%m/%y',    # Day/Month/Year with slashes and two-digit year
    '%m-%d-%Y',    # Month-Day-Year with dashes
    '%m.%d.%Y',    # Month.Day.Year with dots
    '%m/%d/%y',    # Month/Day/Year with slashes and two-digit year
    '%Y.%m.%d',    # Year.Month.Day with dots
    '%Y/%m/%d',    # Year/Month/Day with slashes
    '%y-%m-%d',    # Two-digit Year-Month-Day with dashes
    '%d %B %Y',    # Day full-month-name Year
    '%d %b %Y',    # Day abbreviated-month-name Year
    '%Y-%m-%d %H:%M:%S',  # Date and time with seconds
    '%Y-%m-%dT%H:%M:%SZ', # ISO 8601 format
    '%d-%b-%Y',    # Day abbreviated-month-name Year with dashes
    '%Y%m%d'       # Continuous digits for YearMonthDay
]

def convert_date_columns(df, date_formats):
    for col in df.columns:
        for fmt in date_formats:
            try:
                df[col] = pd.to_datetime(df[col], format=fmt, errors='raise')
                df[col] = df[col].dt.strftime('%d/%m/%Y')
                break
            except Exception:
                continue
    return df

def read_file(file_path):
    if file_path.endswith('.csv'):
            try:
                data = pd.read_csv(file_path)
            except UnicodeDecodeError:
                try:
                    data = pd.read_csv(file_path, encoding='ISO-8859-1')
                except:
                    data = pd.read_csv(file_path, encoding='utf-8', errors='replace')

    elif file_path.endswith('.tsv'):
        try:
            data = pd.read_csv(file_path, delimiter='\t')
        except UnicodeDecodeError:
            try:
                data = pd.read_csv(file_path, delimiter='\t', encoding='ISO-8859-1')
            except:
                data = pd.read_csv(file_path, delimiter='\t', encoding='utf-8', errors='replace')
    elif file_path.endswith('.xlsx'):
        data = pd.read_excel(file_path, sheet_name=0)
    elif file_path.endswith('.txt'):
        # Guess the encoding of the file
        with open(file_path, 'rb') as f:
            result = chardet.detect(f.read())
        encoding = result['encoding']

        with open(file_path, 'r', encoding=encoding, errors='replace') as f:
            lines = f.readlines()
            data = pd.DataFrame(lines, columns=['Reviews'])
    else:
        data = pd.DataFrame()
    
    data.columns = [sanitize_column_name(col) for col in data.columns]
    data = convert_date_columns(data,date_formats)
    return data
  # remove the filepath from the session

def cleanup_expired_sessions():
    filepath = session.get('uploaded_file_path')
    # Path where you want to check for file existence
    specific_path = "/freetxt/website/static/example-data-hub/"
    
    # Check if the file exists in the specific directory
    file_in_specific_path = os.path.join(specific_path, os.path.basename(filepath))
    
    if os.path.exists(file_in_specific_path):
        return  # exit the function as the file exists in the specified directory

    # Check if the session is expired
    
    elif 'expiration_time' in session and session['expiration_time'] <= time.time():
        os.remove(filepath)
        session.pop('uploaded_file_path', None)
    session.clear()



# Define the text summarization function
def text_rank_summarize(article, ratio):
    return summa_summarizer(article, ratio=ratio)



# Route to render the summarizer HTML template
@fileanalysis_summary.route('/summary', methods=['GET', 'POST'])
def summary():
    if request.method == 'POST':
        # Get the input text from the form
        input_text = request.form.get('text-to-analyze', '')
        chosen_ratio = int(request.form.get('chosen_ratio', 10)) / 100
        
        # Run the text summarizer
        summary = run_summarizer(input_text, chosen_ratio)
        
        # Render the template with the summary
        return render_template('summariser.html', summary=summary, input_text=input_text)

    # Render the template without any summary
    return render_template('summariser.html', summary='', input_text='')

# Function to run the text summarizer
def run_summarizer(input_text, chosen_ratio):
    # Tokenize input_text to sentences
    sentences = sent_tokenize(input_text)
    
    # Convert input_text to a string if it isn't already
    if not isinstance(input_text, str):
        input_text = ' '.join(map(str, input_text))
    
    # Ensure the chosen_ratio is at least 0.1
    chosen_ratio = max(chosen_ratio, 0.1)

    # Get the summary using the text_rank_summarize function
    summary = text_rank_summarize(input_text, ratio=chosen_ratio)
    
    # Return the summary or fallback if the summary is empty
    if summary:
        return summary
    elif len(sentences) > 1:
        return sentences[0]
    else:
        return "Unable to summarize the input text."



