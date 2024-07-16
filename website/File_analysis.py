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

import string
from nltk.corpus import stopwords
from nltk.tokenize import sent_tokenize
en_stopwords = list(stopwords.words('english'))
cy_stopwords = open('website/data/welsh_stopwords.txt', 'r', encoding='iso-8859-1').read().split('\n') # replaced 'utf8' with 'iso-8859-1'
STOPWORDS = set(en_stopwords + cy_stopwords+ ["a", "an", "the", "and", "or", "in", "of", "to", "is", "it", "that", "on", "was", "for", "as", "with", "by"])

PUNCS = string.punctuation

PUNCS += '''!→()-[]{};:"\,<>?@#$%^&*_~'''
# Initialize a lock
file_lock = threading.Lock()

FileAnalysis = Blueprint('fileanalysis', __name__)

#### utilities
ALLOWED_EXTENSIONS = {'txt', 'csv', 'xls', 'xlsx','tsv'}
import os
os.environ["TRANSFORMERS_CACHE"] = "huggingface_cache"

from PIL import Image
logo_path = "website/static/images/logo.png"
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

def convert_date_columns(df):
    for col in df.columns:
        # Try to convert the column to datetime format
        try:
            # Infer datetime format for better detection
            df[col] = pd.to_datetime(df[col], infer_datetime_format=True, errors='raise')
            # Convert it to a uniform format
            df[col] = df[col].dt.strftime('%d/%m/%Y')
        except Exception:
            continue
    return df

def read_file(file_path):
    if file_path.endswith('.csv'):
        data = pd.read_csv(file_path)
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
    data = convert_date_columns(data)
    return data
  # remove the filepath from the session

def cleanup_expired_sessions():
    filepath = session.get('uploaded_file_path')
    # Path where to check for file existence
    specific_path = "website/static/example-data-hub/"
    
    # Check if the file exists in the specific directory
    file_in_specific_path = os.path.join(specific_path, os.path.basename(filepath))
    
    if os.path.exists(file_in_specific_path):
        return  # exit the function as the file exists in the specified directory

    # Check if the session is expired
    
    elif 'expiration_time' in session and session['expiration_time'] <= time.time():
        os.remove(filepath)
        session.pop('uploaded_file_path', None)
@FileAnalysis.route('/fileanalysis', methods=['GET', 'POST'])
def fileanalysis():
    sentences = []
    if request.method == 'POST':
        input_method = request.form.get('input-method') or request.json.get('input_method')
      
        if input_method == 'text':
           
            text = request.form.get('text-to-analyze')
            raw_sentences = re.split(r'(?<!\w\.\w.)(?<![A-Z][a-z]\.)(?<=\.|\?)\s', text)
            #sentences = [{"Sentences": sentence} for sentence in raw_sentences]
            sentences = [ sentence for sentence in raw_sentences]
            #print(sentences)
        elif input_method == 'example':
            example_file = request.form.get('example-data')
            if not example_file:
            # Handle the error - maybe raise an exception or return an error response.
                raise ValueError("The example_file is not provided or is None")

            file_path = os.path.join('website/static/example-data-hub', example_file)
            file_extension = os.path.splitext(file_path)[1].lower()  # Extract the file extension

            # Differentiate the behavior based on the file extension
            if file_extension == '.txt':
                with open(file_path, 'r', encoding='utf-8') as f:
                    lines = f.readlines()
                    # Filter out empty lines and strip whitespace
                    sentences = [line.strip() for line in lines if line.strip()]
                    # Convert the list of sentences to a pandas DataFrame
                    data = pd.DataFrame(sentences, columns=['review'])
            elif file_extension in ['.csv', '.xlsx', '.tsv']:
                if file_extension == '.csv':
                    data = pd.read_csv(file_path)
                elif file_extension == '.tsv':
                    try:
                        # First try utf-8 encoding (the default)
                        data = pd.read_csv(file_path, delimiter='\t')
                    except UnicodeDecodeError:
                        try:
                            # If utf-8 fails, try ISO-8859-1
                            data = pd.read_csv(file_path, delimiter='\t', encoding='ISO-8859-1')
                        except:
                            # As a last resort, replace invalid characters
                            data = pd.read_csv(file_path, delimiter='\t', encoding='utf-8', errors='replace')

                else:  # for .xlsx
                    data = pd.read_excel(file_path)
            else:
                raise ValueError("Unsupported file type!")
        
        
            session['uploaded_file_path'] = file_path  # save the file path to session
            
            session['data'] = data.to_json()  # Convert the DataFrame to JSON and store in session
            return jsonify({"columns": list(data.columns)})
            
        
        elif input_method == 'upload':
            #! Limit allowed file size
            # Before saving the new file path, let's clean up any previously uploaded file
            previous_file_path = session.get('uploaded_file_path')
            
            if previous_file_path and os.path.exists(previous_file_path):
               # os.remove(previous_file_path)
                #print(previous_file_path)
               # session.pop('uploaded_file_path', None)  # remove the old filepath from the session
               # session.pop('data', None)  # clear the old data from the session
               cleanup_expired_sessions()
            if 'file' not in request.files:
                flash('No file part')
                return redirect(request.url)
    
            file = request.files['file']
            if file.filename == '':
                flash('No selected file')
                return redirect(request.url)
    
            if file and allowed_file(file.filename):
                filename = secure_filename(file.filename)
                filepath = os.path.join(current_app.config['UPLOAD_FOLDER'], filename)
                #print(filepath)
                file.save(filepath)
                
                file_length = os.stat(filepath).st_size
                
                print()
                print()
                print("FILE LENGTH")
                print(file_length)
                print()
                print()
                
                session['uploaded_file_path'] = filepath  # save the new file path to session
                data = read_file(filepath)
                session['data'] = data.to_json()  # Convert the DataFrame to JSON and store in new session
                return jsonify({"columns": list(data.columns)})
            
            else:
                flash('Invalid file type')
                return redirect(request.url)

        elif input_method == 'columns':
            selected_columns = request.json.get('selectedColumns')
    
            data_json = session.get('data')
            if not data_json:
                return jsonify({"message": "No data found in session", "data": []})

            data = pd.read_json(data_json)  # Convert the JSON back to DataFrame
            #for col in data.columns:
            # Check if the first non-NaN value in the column looks like a date
                # sample_val = data[col].dropna().iloc[0] if not data[col].dropna().empty else None
                # if sample_val and isinstance(sample_val, str) and "GMT" in sample_val:
                    # Step 3: Convert the column to the desired date format
                  #   data[col] = pd.to_datetime(data[col], format='%d-%m-%Y', errors='coerce')

            data=convert_date_columns(data)
            extracted_data = data[selected_columns].dropna().drop_duplicates().to_dict(orient='records')
            session['extracted_data'] = pd.DataFrame(extracted_data).to_json()
            return jsonify({"message": "Data extracted", "data": extracted_data})
           
        cleanup_expired_sessions()
        return jsonify({"sentences": sentences})

    return render_template('Fileanalysis.html')

@FileAnalysis.route('/process_sentences', methods=['GET', 'POST'])
def handle_selected_sentences():
    data = request.get_json()
    selected_sentences = data.get('sentences', [])
    language = data.get('language', 'en')   
    #search_word = data.get('search_word', 'see')
    # Get word frequencies
    words = []
    for sentence in selected_sentences:
        extracted_words = re.findall(r'\w+', sentence.lower())
        filtered_words = [word for word in extracted_words if word not in STOPWORDS and word not in PUNCS]
        words.extend(filtered_words)

            # Counting frequencies
    word_frequencies = dict(Counter(words))
    # Sorting by highest frequency
    sorted_word_frequencies = dict(sorted(word_frequencies.items(), key=lambda item: item[1], reverse=True))

    sentiment_analyser = SentimentAnalyser()
    # Get sentiment analysis results
    sentiment_data, sentiment_counts, pie_chart_html,bar_chart_html = sentiment_analysis(selected_sentences,language)
    df_sentiment= pd.DataFrame(sentiment_data)
    with file_lock:
        scatter_text_html = sentiment_analyser.generate_scattertext_visualization(df_sentiment,language)
    ## Word Tree Generator
    most_frequent_word = next(iter(sorted_word_frequencies))
    search_word = most_frequent_word
    #print (search_word)
    sentences = [[s] for s in selected_sentences]

    wordTreeData = sentences  # This should be a list
    summary = summarize_text(selected_sentences)
    #print(summary)
    return jsonify({
        "status": "success", 
        "wordFrequencies": sorted_word_frequencies, 
        "sentimentData": sentiment_data, 
        "sentimentCounts": sentiment_counts,
        'sentimentPlotPie': pie_chart_html,
        'sentimentPlotBar': bar_chart_html,
        "wordTreeData": wordTreeData, "search_word": search_word, "summary": summary,  "scatterTextHtml": scatter_text_html
    })

def sentiment_analysis(sentences,language, sentiment_classes=3):
    analyser = SentimentAnalyser()
    results = analyser.analyse_sentiment(sentences,language,sentiment_classes)
    if results:
        sentiments, sentiment_counts = results
        dfanalysis = pd.DataFrame(sentiments, columns=['Review', 'Sentiment Label', 'Confidence Score'])
        data = dfanalysis.to_dict(orient='records')
        color_map = {
    "Very negative": "#ff3333",  
    "Negative": "#ff8a3d",     
    "Neutral": "#b0b0b0",      
    "Positive": "#c5e17a" ,     
    "Very positive": "#6ebd45" ,
    "Negyddol Iawn": "#ff3333",  
    "Negyddol": "#ff8a3d",     
    "Niwtral": "#b0b0b0",      
    "Cadarnhaol": "#c5e17a" ,     
    "Cadarnhaol Iawn": "#6ebd45" 
}
        # Generating the pie chart
        if language == 'en':
        
            fig = px.pie(values=sentiment_counts.values(), names=sentiment_counts.keys(),
                 title='Sentiment Distribution', color=sentiment_counts.keys(),
                 color_discrete_map=color_map)
        elif language == 'cy':
            fig = px.pie(values=sentiment_counts.values(), names=sentiment_counts.keys(),
                 title='Dosbarthiad Sentiment', color=sentiment_counts.keys(),
                 color_discrete_map=color_map)
        plot_html_pie = fig.to_html(full_html=False)
        fig.write_image("website/static/Sentiment_plots/sentiment_pie.png") 
        fig.write_html("website/static/Sentiment_plots/sentiment_pie.html")
        with open("website/static/Sentiment_plots/sentiment_pie.html", "r", encoding="utf-8") as f:
            content = f.read()

        # Add the "Visualisation by" text and logo image at the bottom
        addition = """
    <div style="text-align:center; margin-top:30px;">
        Visualisation by <img src="https://ucrel-freetxt-2.lancs.ac.uk/static/images/logo.png" alt="Logo" style="height:40px;">
    </div>
    """

        # Append the new content just before the closing body tag
        content = content.replace("</body>", addition + "\n</body>")

        # Write the updated content back to the file
        with open("website/static/Sentiment_plots/sentiment_pie.html", "w", encoding="utf-8") as f:
            f.write(content)

        # Generating the bar chart
        
        if language == 'en':
            fig_bar = px.bar(x=list(sentiment_counts.keys()), y=list(sentiment_counts.values()),
                 title='Sentiment Distribution', labels={'x':'Sentiment', 'y':'Count'},
                 color=list(sentiment_counts.keys()), color_discrete_map=color_map)
        elif language == 'cy':
            fig_bar = px.bar(x=list(sentiment_counts.keys()), y=list(sentiment_counts.values()),
                 title='Dosbarthiad Sentiment', labels={'x':'Sentiment', 'y':'Cyfrif'},
                 color=list(sentiment_counts.keys()), color_discrete_map=color_map)
        fig_bar.update_traces(marker_line_color='black', marker_line_width=0.5)
        fig_bar.write_image("website/static/Sentiment_plots/sentiment_bar.png")
        fig_bar_path = "website/static/Sentiment_plots/sentiment_bar.png"
       # append_logo_to_image(fig_bar_path, logo_path, fig_bar_path)
        fig_bar.write_html("website/static/Sentiment_plots/sentiment_bar.html")
        # Read the existing HTML content
        with open("website/static/Sentiment_plots/sentiment_bar.html", "r", encoding="utf-8") as f:
            content = f.read()

        # Add the "Visualisation by" text and logo image at the bottom
        addition = """
    <div style="text-align:center; margin-top:30px;">
        Visualisation by <img src="https://ucrel-freetxt-2.lancs.ac.uk/static/images/logo.png" alt="Logo" style="height:40px;">
    </div>
    """

        # Append the new content just before the closing body tag
        content = content.replace("</body>", addition + "\n</body>")

        # Write the updated content back to the file
        with open("website/static/Sentiment_plots/sentiment_bar.html", "w", encoding="utf-8") as f:
            f.write(content)
        plot_html_bar = fig_bar.to_html(full_html=False)
        return data, sentiment_counts, plot_html_pie, plot_html_bar
    return None, None, None

@FileAnalysis.route('/update_sentiment', methods=['POST'])
def handle_sentiment_update():
    data = request.get_json()
    language = data.get('language', 'en')
    #print(data)
    chosen_classes = data.get('sentiment_classes', 3)
    #print(chosen_classes)
    sentences = session.get('mergedData', [])
    
    sentiment_data, sentiment_counts, pie_chart_html, bar_chart_html = sentiment_analysis(sentences,language, chosen_classes)
    session['sentiment_data'] = sentiment_data
    return jsonify({
        "status": "success",
        "sentimentData": sentiment_data,
        "sentimentCounts": sentiment_counts,
        'sentimentPlotPie': pie_chart_html,
        'sentimentPlotBar': bar_chart_html
    })



def summarize_text(text, ratio=0.4):
    return run_summarizer(text, ratio)

@FileAnalysis.route('/summarise', methods=['POST'])
def summarize_route():
    data = request.json
    text = session.get('mergedData', [])
    
    if isinstance(text, list):
        text = ' '.join(text)
    else:
        text=text
    chosen_ratio = data.get('chosen_ratio', 0.4)
    summary = run_summarizer(text, chosen_ratio) 
    #print('Generated summary', summary)
    return jsonify({"summary": summary})
   


@FileAnalysis.route('/clear-session', methods=['POST'])
def clear_session():
    filepath = session.get('uploaded_file_path')
    #print(filepath)
    if filepath and os.path.exists(filepath):
        os.remove(filepath)
        session.pop('uploaded_file_path', None)  # remove the filepath from the session
    session.clear()  # clear other session data if needed
    return jsonify({"message": "Session cleared"})

@FileAnalysis.route('/process_rows', methods=['GET', 'POST'])
def handle_selected_rows():
    data = request.get_json()
    merged_rows = data.get('mergedData', [])
    # print(merged_rows)
    language = data.get('language', 'en')
    # Get word frequencies
    words = []
    for sentence in merged_rows:
        extracted_words =  sentence.split()
        filtered_words = [word for word in extracted_words if word not in STOPWORDS ]
        words.extend(filtered_words)

            # Counting frequencies
    word_frequencies = dict(Counter(words))
    # Sorting by highest frequency
    sorted_word_frequencies = dict(sorted(word_frequencies.items(), key=lambda item: item[1], reverse=True))

    # Choose a random word from the list as the search word
    scatter_text_html = None
    sentiment_analyser = SentimentAnalyser()
    # Get sentiment analysis results
    try:
        sentiment_data, sentiment_counts, pie_chart_html, bar_chart_html = sentiment_analysis(merged_rows, language)
        
    except Exception as e:
        print("Error in sentiment analysis:", e)

    try:
        df_sentiment = pd.DataFrame(sentiment_data)
      

        with file_lock:
            scatter_text_html = sentiment_analyser.generate_scattertext_visualization(df_sentiment, language)
           
           
    except Exception as e:
        print("Error in DataFrame or visualization:", e)
    session['scatter_html'] = scatter_text_html
    
    # Word Tree Generator
    sentences = [[s] for s in merged_rows]
    wordTreeData = sentences
    random_word = random.choice(list(sorted_word_frequencies.keys()))
    search_word = random_word
    # Initialize the KWICAnalyser with the merged rows
    analyser = KWICAnalyser(' '.join(merged_rows), language='en')
    # Adding to session for word cloud to use
    session["tokens_with_semantic_tags"] = analyser.tokens_with_semantic_tags
    
    # Get the sorted unique list of semantic tags
    sorted_unique_tags = analyser.get_sorted_unique_tags()
    word_frequencies = analyser.get_word_frequencies()
    unfiltered_word_frequencies = analyser.get_word_frequencies(isUnfiltered=True)
    session['unfiltered_word_frequencies'] = unfiltered_word_frequencies
    session['word_frequencies'] = word_frequencies
    session['mergedData'] = merged_rows
    session['sentiment_data'] = sentiment_data
    summary = summarize_text(merged_rows)

    return jsonify({
        "status": "success",
        "wordFrequencies": word_frequencies,
        "sentimentData": sentiment_data,
        "sentimentCounts": sentiment_counts,
        'sentimentPlotPie': pie_chart_html,
        'sentimentPlotBar': bar_chart_html,
        "wordTreeData": wordTreeData,
        "search_word": search_word,
        "summary": summary, "sortedUniqueTags": sorted_unique_tags, 
        "scatterTextHtml": scatter_text_html
    })
    
@FileAnalysis.route('/get_exampledata_files')
def get_files():
    directory = 'website/static/example-data-hub'
    files = [f for f in os.listdir(directory) if os.path.isfile(os.path.join(directory, f))]
    return jsonify(files)


# Cleaning function
def clean_review(review):
    return review.translate(str.maketrans('', '', PUNCS)).lower()





@FileAnalysis.route('/generate_wordcloud', methods=['POST','GET'])
def generate_wordcloud():
    if request.method == 'POST':
        request_data = request.get_json(force=True)
        #print(request.headers.get('Content-Type'))
      
        cloud_shape_path = request_data.get('cloud_shape')
        cloud_outline_color = request_data.get('cloud_outline_color')
        cloud_type = request_data.get('cloud_type')
        cloud_measure = request_data.get('cloud_measure')
#print(cloud_shape_path)
        if cloud_shape_path== '':
                cloud_type = 'all_words'
                cloud_shape_path = 'https://ucrel-freetxt-2.lancs.ac.uk/static/images/img/cloud.png'
                cloud_outline_color= 'white'
                cloud_measure='KENESS'
       
        
        data_json = session.get('mergedData')
        
        input_data = pd.DataFrame(data_json)
       
        # Clean each review in the DataFrame
        input_data[input_data.columns[0]] = input_data[input_data.columns[0]].apply(clean_review)
       
          # Detect the language using the langdetect package
        combined_text = ' '.join(input_data[0].astype(str))
        try:
            language = detect(combined_text)
        except:
            language = 'en'  # default to English if detection fails
        
        cloud_generator = WordCloudGenerator(input_data)
        wc_path, word_list = cloud_generator.generate_wordcloud(cloud_shape_path, cloud_outline_color, cloud_type, language, cloud_measure, wordlist={})
        
        session['word_cloud_src'] = wc_path
        
        json_data = {
            "status": "success",
            "wordcloud_image_path": [wc_path],
            "word_list": [word_list]
            }
        
        # Handles the generation of the second cloud, containing the words with the selected semantic tags
        if cloud_type == 'semantic_tags' and session["tokens_with_semantic_tags"]:
            words_tags = session["tokens_with_semantic_tags"]
            words_with_sem_tags = [word for (word, pos, tag) in words_tags if tag in word_list]
            sec_wc_path, sec_word_list = cloud_generator.generate_wordcloud(cloud_shape_path, cloud_outline_color, 'all_words', language, cloud_measure, words_with_sem_tags, f"{time.time()}_words")
            
            tag_words_associations = {tag: list({word for (word, pos, tag_entry) in words_tags if tag == tag_entry}) for (word, pos, tag) in words_tags if tag in word_list}
            
            session['sec_word_cloud_src'] = sec_wc_path
            
            json_data = {
                "status": "success",
                "wordcloud_image_path": [wc_path, sec_wc_path],
                "word_list": [word_list, sec_word_list],
                "tag_words_associations": tag_words_associations
                }
            
        return jsonify(json_data)
    
    return jsonify({"status": "error", "message": "Invalid request method"})


@FileAnalysis.route('/Keyword_collocation', methods=['POST'])
def analyse():
    window_size = request.form.get('window_size', 5, type=int)
    selected_word = request.form.get('word_selection')
    selected_tag = request.form.get('tag_selection')
    selected_semantic = request.form.get('sem_selection')
    kwic_option = request.form.get('kwic_option')
    language = session.get('language')
    data_json = session.get('mergedData')
    input_data = pd.DataFrame(data_json)
    analyzer = KWICAnalyser(input_data, language='en')

    if kwic_option == "word" and selected_word:
        kwic_results = analyzer.get_kwic(selected_word, window_size)
        collocs_strengths = analyzer.get_collocation_strength(selected_word)
    elif kwic_option == "tag" and selected_tag:
        kwic_results = analyzer.get_kwic(selected_tag, window_size, by_tag=True)
        if not kwic_results:
           #flash("No instances found. Please choose another category as the data does not have this category.")
           return jsonify({"error": "Invalid KWIC option or missing selection!", 'message': 'No instances found. Please choose another category as the data does not have this category.'})
        else:
            collocs_strengths = analyzer.get_collocation_strength(selected_word if selected_word else selected_tag, by_tag=True)

    elif kwic_option == "sem" and selected_semantic:
        kwic_results = analyzer.get_kwic(selected_semantic, window_size, by_sem=True)
        collocs_strengths = analyzer.get_collocation_strength(selected_word if selected_word else selected_semantic, by_sem=True)
    else:
        return jsonify({"error": "Invalid KWIC option or missing selection!"})

    collocs = analyzer.get_collocs(kwic_results)
    combined_collocs = [(colloc, freq, mi, ll) for (colloc, freq) in collocs for _, mi, ll in collocs_strengths if colloc == _]
    combined_collocs.sort(key=lambda x: x[2], reverse=True)

    if kwic_option == "word":
        keyword_for_plot = selected_word
    elif kwic_option == "tag":
        keyword_for_plot = selected_tag
    elif kwic_option == "sem":
        keyword_for_plot = selected_semantic
    else:
        return jsonify({"error": "Invalid KWIC option!"})

    graph_path = analyzer.plot_coll_14(keyword_for_plot, collocs)
    session['keyword_results'] = kwic_results
    session['combined_collocs'] = combined_collocs
    session['graph_path'] = graph_path
    return jsonify({
        "kwic_results": kwic_results,
        "collocs": combined_collocs,
        "graph_path": graph_path
    })

@FileAnalysis.route('/get_file_list')
def get_file_list():
    folder_path = 'website/static/example-data-hub'  
    files = [f for f in os.listdir(folder_path) if os.path.isfile(os.path.join(folder_path, f))]
    return jsonify(files)

@FileAnalysis.route('/generate-pdf', methods=['POST'])
def generate_pdf():
    if request.method == 'POST':
        selected_sections = request.form.getlist('sections') if 'sections' in request.form else []
        #print(selected_sections)
        if 'sentiment_data' in session:
            sentimentData = session.get('sentiment_data')
            
            
        sentiment_content = sentimentData
        sentiment_explanation = request.form['sentiment_explanation'] if 'sentiment_explanation' in request.form else ""
        ##request.form['sentimentViewContent'] if 'sentimentViewContent' in request.form else ""
        #SentimentPlot = request.form['SentimentPlot'] if 'SentimentPlot' in request.form else ""
        #SentimentPlotbar = request.form['SentimentPlotbar'] if 'SentimentPlotbar' in request.form else ""
        wordtree=request.form['wordtree'] if 'wordtree' in request.form else ""
        cloudtype = request.form['Cloud_type'] if 'Cloud_type' in request.form else ""
        cloudmeasure = request.form['Cloud_measure'] if 'Cloud_measure' in request.form else ""
        summary=request.form['summaryField'] if 'summaryField' in request.form else ""
        SentimentPlot = 'https://ucrel-freetxt-2.lancs.ac.uk/static/Sentiment_plots/sentiment_pie.png'
        SentimentPlotbar= 'https://ucrel-freetxt-2.lancs.ac.uk/static/Sentiment_plots/sentiment_bar.png'
        word_cloud_image_src = request.form['wordCloudImageSrc'] if 'wordCloudImageSrc' in request.form else ""
        rendered_html = render_template('report.html', 
                                       
                                       sentiment_content=sentiment_content, SentimentPlot=SentimentPlot,
                                       SentimentPlotbar=SentimentPlotbar,wordtree=wordtree, sentiment_explanation=sentiment_explanation,
                                       word_cloud_image_src=word_cloud_image_src, summary = summary, selected_sections=selected_sections,
                                      cloudmeasure= cloudmeasure, 
                                       cloudtype=cloudtype, datetime=datetime)
        # Convert HTML to PDF using WeasyPrint
        pdf = HTML(string=rendered_html).write_pdf()
    
        # Send the generated PDF as a response
        response = Response(pdf, content_type='application/pdf')
        response.headers['Content-Disposition'] = 'inline; filename=report.pdf'
        return response
    else:
        # Handle GET request if needed. 
        return "This endpoint accepts POST requests with form data to generate a PDF."


@FileAnalysis.route('/check_language', methods=['POST'])
def check_language():
    try:
        request_data = request.get_json()
        selected_columns = request_data.get('columns', [])
        language = request_data.get('language', 'en')

        # Extract text data from selected columns
        text_data = []
        for column in selected_columns:
            values = column.get('values', [])
            text_data.extend(values)

        # Create a DataFrame from the extracted text data
        data = pd.DataFrame({'text': text_data})
        # Get the original file name from the session
        full_file_path = session.get('uploaded_file_path')
          # Extract the file name from the full path
        original_file_name = os.path.basename(full_file_path)
        english_data_dict = {}
        welsh_data_dict = {}
        
        checker = LanguageChecker(data, 'text')
        english_data, welsh_data = checker.detect_and_split_languages()
        if english_data is not None:
            english_data_dict['text'] = english_data
        if welsh_data is not None:
            welsh_data_dict['text'] = welsh_data

        has_english = bool(english_data_dict)
        has_welsh = bool(welsh_data_dict)
        
        if has_english and not has_welsh:
            message = f'Your data is only in English from file: {original_file_name}' if language == 'en' else f'Mae eich data yn Saesneg yn unig o\'r ffeil: {original_file_name}.'
            return jsonify({'message': message})

        elif has_welsh and not has_english:
            message = f'Your data is only in Welsh from file: {original_file_name}' if language == 'en' else f'Mae eich data yn Gymraeg yn unigo\'r ffeil: {original_file_name}.'
            return jsonify({'message': message})

        elif has_english and has_welsh:
            # Use the original file name for CSV files
            english_filename = f'{original_file_name}_english.csv'
            welsh_filename = f'{original_file_name}_welsh.csv'
            # Save these dataframes to temporary CSV files and keep track of the paths
            english_path = os.path.abspath(os.path.join('website/static/temp', english_filename))
            welsh_path = os.path.abspath(os.path.join('website/static/temp', welsh_filename))

            pd.concat(english_data_dict.values()).to_csv(english_path, index=False)
            pd.concat(welsh_data_dict.values()).to_csv(welsh_path, index=False)

            session['english_data_path'] = english_path
            session['welsh_data_path'] = welsh_path

            message = 'Mae eich data yn cynnwys Saesneg a Chymraeg.' if language != 'en' else 'Your data contains both English and Welsh.'
            return jsonify({'message': message, 'has_both': True})

        return jsonify({'error': 'Unable to determine the language of your data.'})

    except Exception as e:
        return jsonify({'error': f'An error occurred: {str(e)}'})




@FileAnalysis.route('/download/english')
def download_english():
    english_path = session.get('english_data_path')
    if not english_path:
        return "File not found.", 404
    # Extract the original file name from the path
    original_file_name = os.path.basename(english_path)

    # Set the original file name as the download name
    return send_file(english_path, as_attachment=True, download_name=original_file_name)


@FileAnalysis.route('/download/welsh')
def download_welsh():
    welsh_path = session.get('welsh_data_path')
    if not welsh_path:
        return "File not found.", 404

    original_file_name = os.path.basename(welsh_path)

    # Set the original file name as the download name
    return send_file(welsh_path, as_attachment=True, download_name=original_file_name)


@FileAnalysis.route('/get-html-pie')
def get_html_graph():
    return send_from_directory(directory='static/Sentiment_plots', path='sentiment_pie.html', as_attachment=True)

@FileAnalysis.route('/get-html-bar')
def get_html_bar():
    return send_from_directory(directory='static/Sentiment_plots', path='sentiment_bar.html', as_attachment=True)

@FileAnalysis.route('/get-html-scatter')
def get_html_scatter():
    if 'scatter_html' in session:
        scatter_html = session.get('scatter_html')
        filename = os.path.basename(scatter_html)      
    return send_from_directory(directory='static/wordcloud/', path=filename, as_attachment=True)


def add_logo_and_text_to_image(image_path):
    # Open the word cloud image
    wc_image = Image.open(image_path)

    # Open the logo image 
    logo_image = Image.open("website/static/images/logo.png")
    logo_image = logo_image.resize((100, 40))  # Resize logo

    # Paste the logo onto the word cloud image
    wc_image.paste(logo_image, (10, wc_image.height - 50), logo_image)

    # Optionally add text
    draw = ImageDraw.Draw(wc_image)
    font = ImageFont.load_default()  # Or specify a custom font
    draw.text((120, wc_image.height - 45), "Visualisation by", (0, 0, 0), font=font)

    # Save the modified image back to the same path
    wc_image.save(image_path)

@FileAnalysis.route('/get-word-cloud')
def get_word_cloudsrc():
    if 'word_cloud_src' in session:
        word_cloud_src = session.get('word_cloud_src')
        filename = os.path.basename(word_cloud_src)
        add_logo_and_text_to_image(os.path.join('website/static/wordcloud/', filename))       
    return send_from_directory(directory='static/wordcloud/', path=filename, as_attachment=True)

@FileAnalysis.route('/get-sec-word-cloud')
def get_sec_word_cloudsrc():
    if 'sec_word_cloud_src' in session:
        word_cloud_src = session.get('sec_word_cloud_src')
        filename = os.path.basename(word_cloud_src)
        add_logo_and_text_to_image(os.path.join('website/static/wordcloud/', filename))       
    return send_from_directory(directory='static/wordcloud/', path=filename, as_attachment=True)

@FileAnalysis.route('/get-graph-path')
def get_graph_path():
    if 'graph_path' in session:
        graph_path = session.get('graph_path')
        filename = os.path.basename(graph_path)
            
    return send_from_directory(directory='static/network_graphs/', path=filename, as_attachment=True)

import traceback
from io import BytesIO
@FileAnalysis.route('/get-Sentimentdata')
def get_Sentimentdata():
    try:
        if 'sentiment_data' in session:
            sentimentData = session.get('sentiment_data')
           # print(sentimentData)
            data = pd.DataFrame(sentimentData)
            #print(data)
            # Convert DataFrame to CSV and hold it in memory
            buffer = BytesIO()
            data.to_csv(buffer, index=False, encoding='utf-8')
            buffer.seek(0)  # Return to the start of the bufferr
            
            return Response(
                buffer.getvalue(),
                headers={
                    "Content-Disposition": "attachment; filename=sentimentData.csv",
                    "Content-type": "text/csv"
                }
            )
        else:
            return "No sentiment data found in the session", 400

    except Exception as e:
        # Print the error to the Flask console
        print(traceback.format_exc())
        return "Server encountered an error", 500

@FileAnalysis.route('/get-keyword-data')
def get_keyword_data():
    try:
        if 'keyword_results' in session:
            keywordresults = session.get('keyword_results')
            structured_data = [{
            'Left Context': item[0],
            'Keyword': item[1],
            'Right Context': item[2]
                } for item in keywordresults]
            data = pd.DataFrame(structured_data)
            buffer = BytesIO()
            data.to_csv(buffer, index=False, encoding='utf-8')
            buffer.seek(0)  # Return to the start of the bufferr
            return Response(
                buffer.getvalue(),
                headers={
                 "Content-Disposition": "attachment; filename=keywordData.csv",
                "Content-type": "text/csv"
                }
            )
    except Exception as e:
        # Handle  exception here
        return "Server encountered an error", 500
    
@FileAnalysis.route('/get-filtered-word-frequencies-data')
def get_filtered_word_frequencies():
    try:
        if 'word_frequencies' in session:
            word_frequencies = session['word_frequencies']
            
            # Sorted by frequency
            sorted_word_frequencies = {k: v for k, v in sorted(word_frequencies.items(), key=lambda item: (-item[1], item[0]))}
            
            structured_data = [{
                'word': key,
                'frequency': val
                } for key, val in sorted_word_frequencies.items()]
            
            filtered_data = pd.DataFrame(structured_data)
            
            buffer = BytesIO()
            filtered_data.to_csv(buffer, index=False, encoding='utf-8')
            buffer.seek(0)
            
            return Response(
                buffer.getvalue(),
                headers={
                 "Content-Disposition": "attachment; filename=filteredKeywordData.csv",
                "Content-type": "text/csv"
                }
            )
    except Exception as e:
        return "Server encountered an error", 500

@FileAnalysis.route('/get-unfiltered-word-frequencies-data')
def get_unfiltered_word_frequencies():
    try:
        if 'unfiltered_word_frequencies' in session:
            unfiltered_word_frequencies = session['unfiltered_word_frequencies']
            
            # Sorted by frequency
            sorted_unfiltered_word_frequencies = {k: v for k, v in sorted(unfiltered_word_frequencies.items(), key=lambda item: (-item[1], item[0]))}
            
            structured_data = [{
                'word': key,
                'frequency': val
                } for key, val in sorted_unfiltered_word_frequencies.items()]
            
            
            unfiltered_data = pd.DataFrame(structured_data)
            
            buffer = BytesIO()
            unfiltered_data.to_csv(buffer, index=False, encoding='utf-8')
            buffer.seek(0)
            
            return Response(
                buffer.getvalue(),
                headers={
                 "Content-Disposition": "attachment; filename=unfilteredKeywordData.csv",
                "Content-type": "text/csv"
                }
            )
    except Exception as e:
        return "Server encountered an error", 500
            
# Function to retain word clusters or individual words
def retain_clusters(text, clusters):
    words = text.split()
    retained_words = [word for word in words if any(cluster in word for cluster in clusters)]
    return ' '.join(retained_words)

@FileAnalysis.route('/regenerate_wordcloud', methods=['POST'])
def regenerate_wordcloud():
    if request.method == 'POST':
        request_data = request.get_json(force=True)
        
        # Get the provided words from the request
        provided_words = set(request_data.get('words', []))
        
        label_name = request_data.get('label')
        cloud_shape_path = request_data.get('cloud_shape')
        cloud_outline_color = request_data.get('cloud_outline_color')
        cloud_type = request_data.get('cloud_type')
        cloud_measure = request_data['cloud_measure']
        if cloud_shape_path == '':
            cloud_type = 'all_words'
            cloud_shape_path = 'https://ucrel-freetxt-2.lancs.ac.uk/website/static/images/img/cloud.png'
            cloud_outline_color= 'white'
            cloud_measure='KENESS'
        # Extract the data and filter based on provided words
        data_json = session.get('mergedData')
        
        input_data = pd.DataFrame(data_json)
       
        # Clean each review in the DataFrame
        input_data[input_data.columns[0]] = input_data[input_data.columns[0]].apply(clean_review)
       
        # Detect the language using the langdetect package
        combined_text = ' '.join(input_data[0].astype(str))
        try:
            language = detect(combined_text)
        except:
            language = 'en'  # default to English if detection fails
        
        cloud_generator = WordCloudGenerator(input_data)
        wc_path, word_list = cloud_generator.generate_wordcloud(cloud_shape_path, cloud_outline_color, cloud_type, language, cloud_measure, provided_words)
       
        session['word_cloud_src'] = wc_path
        
        json_data = {
            "status": "success",
            "wordcloud_image_path": [wc_path],
            "word_list": [word_list]
            }
        
        # Handles the generation of the second cloud, containing the words with the selected semantic tags
        if cloud_type == 'semantic_tags' and session["tokens_with_semantic_tags"]:
            words_tags = session["tokens_with_semantic_tags"]
            words_with_sem_tags = [word for (word, pos, tag) in words_tags if tag in word_list]
            sec_wc_path, sec_word_list = cloud_generator.generate_wordcloud(cloud_shape_path, cloud_outline_color, 'all_words', language, cloud_measure, words_with_sem_tags, f"{time.time()}_words")
            
            tag_words_associations = {tag: list({word for (word, pos, tag_entry) in words_tags if tag == tag_entry}) for (word, pos, tag) in words_tags if tag in word_list}
            
            session['sec_word_cloud_src'] = sec_wc_path
            
            json_data = {
                "status": "success",
                "wordcloud_image_path": [wc_path, sec_wc_path],
                "word_list": [word_list, sec_word_list],
                "tag_words_associations": tag_words_associations
                }
        
        return jsonify(json_data)

    return jsonify({"status": "error", "message": "Invalid request method"})

@FileAnalysis.route('/update_graph', methods=['POST'])
def handle_graph_update():
    data = request.get_json()
    keyword = data.get('keyword') 
    collocs = data.get('collocs', [])
    graph_type = data.get('graphType', 'frequency')
    
    # Call the function to update the graph and get the graph path
    graph_path = KWICAnalyser.update_graph(keyword, collocs, graph_type)
    
    session['graph_path'] = graph_path
    # Return the graph path to the client
    return jsonify({
        "status": "success",
        "graphPath": graph_path
    })
@FileAnalysis.route('/get-collos-data')
def get_collos_data():
    try:
        if 'combined_collocs' in session:
            combined_collocs = session.get('combined_collocs')
            buffer = StringIO()
            structured_data = [{
            'Word': item[0],
            'Frequency': item[1],
            'Mutual Information': item[2], 'Log Liklihood': item[3]
                } for item in combined_collocs]
            data = pd.DataFrame(structured_data)
            buffer = BytesIO()
            data.to_csv(buffer, index=False, encoding='utf-8')
            buffer.seek(0)  # Return to the start of the bufferr
            return Response(
                buffer.getvalue(),
                headers={
                 "Content-Disposition": "attachment; filename=combined_collocsData.csv",
                "Content-type": "text/csv"
                }
            )
    except Exception as e:
       
        return "Server encountered an error", 500