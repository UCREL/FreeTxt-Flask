import os
import numpy as np
import pandas as pd
from wordcloud import WordCloud, STOPWORDS, ImageColorGenerator
from PIL import Image as PilImage
import matplotlib.pyplot as plt
import nltk
import time
from spacy.util import load_model_from_path
from collections import Counter
import requests
import io
from langdetect import detect
import spacy
import math
import imageio
nlp = spacy.load('/home/khallafn/Freetxt-flask/en_core_web_sm-3.2.0')  # Load the spaCy model
nlp.max_length = 9000000
from nltk.corpus import stopwords
nltk.download('punkt')
nltk.download('stopwords')
from pathlib import Path
import sys
sys.path.insert(0, '/home/khallafn/Freetxt-flask/venv/lib/python3.10/site-packages/')

from spacy.language import Language
import pymusas
print(dir(pymusas))
#Language.factory("pymusas_rule_based_tagger", func=pymusas.rule_based_tagger)

path_to_model = Path('/home/khallafn/Freetxt-flask/venv/lib/python3.10/site-packages/en_dual_none_contextual/en_dual_none_contextual-0.3.1')
### stopwords_files
# Update with the Welsh stopwords (source: https://github.com/techiaith/ataleiriau)
en_stopwords = list(stopwords.words('english'))
cy_stopwords = open('/home/khallafn/Freetxt-flask/website/data/welsh_stopwords.txt', 'r', encoding='iso-8859-1').read().split('\n') # replaced 'utf8' with 'iso-8859-1'
STOPWORDS = set(en_stopwords + cy_stopwords)
def cleanup_old_graphs(directory, age_in_seconds=20): 
    current_time = time.time()

    for filename in os.listdir(directory):
        if filename.startswith("wordcloud_") and filename.endswith(".png"):
            file_timestamp = int(filename.split("_")[1].split(".")[0])
            file_age = current_time - file_timestamp

            if file_age > age_in_seconds:
                os.remove(os.path.join(directory, filename))
class WordCloudGenerator:

    def __init__(self,input_data):
        self.STOPWORDS = set(STOPWORDS)
        self.PUNCS = [".", "!", ":", ";", "-", "_", "?", "&", "*", "(", ")", "$", "@", "#", "%", "+", "=", "<", ">", "/", "|", "]", "[", "{", "}", "\\", "\""]
        self.pymusaslist = pd.read_csv('/home/khallafn/Freetxt-flask/website/data/Pymusas-list.txt', names= ['USAS Tags', 'Equivalent Tag'])
        self.text=''
        for _, row in input_data.iterrows():
            self.text += ' '.join(row) + '\n'
       
        self.tokens_with_semantic_tags = self.Pymsas_tags(self.text)
    def load_image(self, image_file):
        return PilImage.open(image_file)

    def preprocess_data(self, data, language):
        # Tokenize and clean data
         # tokens = []
        #if language == 'en':
          #tokenizer = nltk.RegexpTokenizer(r"\w+")
          #tokens = tokenizer.tokenize(data)
          #tokens = [word.lower() for word in tokens if word.lower() not in self.STOPWORDS]
        #elif language == 'cy':
           # tokens = data.split(' ')  # Splitting by space
            # Additional text cleaning for Welsh language can be added here
            # For example, you might want to remove stopwords, if you have a list of Welsh stopwords
           # tokens = [word.lower() for word in tokens]

       
           
        # Tokenize and clean data
            tokens = []
            tokens= self.tokens_with_semantic_tags['Text']

     
        
            return tokens
    def Pymsas_tags(self, text):
        lang_detected = detect(text)
        print(lang_detected)
        
        if lang_detected == 'cy':
           
            processed_sentence = text.strip().replace('‘', "'").replace('’', "'")
    


            files = {
   	    'type': (None, 'rest'),
    	'style': (None, 'tab'),
    	'lang': (None, 'cy'),
    	'text': processed_sentence,
		}

            response = requests.post('http://ucrel-api-01.lancaster.ac.uk/cgi-bin/pymusas.pl', files=files)
            
            # Read the response into a DataFrame
            cy_tagged = pd.read_csv(io.StringIO(response.text), sep='\t')
            cy_tagged['USAS Tags'] = cy_tagged['USAS Tags'].str.split('[,/mf]').str[0].str.replace('[\[\]"\']', '', regex=True)
            
            cy_tagged['USAS Tags'] = cy_tagged['USAS Tags'].str.split('+').str[0]
            
            merged_df = pd.merge(cy_tagged, self.pymusaslist, on='USAS Tags', how='left')
            print(merged_df)
            merged_df.loc[merged_df['Equivalent Tag'].notnull(), 'USAS Tags'] = merged_df['Equivalent Tag'] 
            merged_df = merged_df.drop(['Equivalent Tag'], axis=1)
            tags_to_remove = ['Unmatched', 'Grammatical bin', 'Pronouns', 'Period']
            merged_df = merged_df[~merged_df['USAS Tags'].str.contains('|'.join(tags_to_remove))]
            
            return merged_df[['USAS Tags','Text']]

        elif lang_detected == 'en':
            files = {
        'type': (None, 'rest'),
        'email': (None, 'hello'),
        'tagset': (None, 'c7'),
        'style': (None, 'tab'),
        'text': (None, text),
        }

            response = requests.post('http://ucrel-api-01.lancaster.ac.uk/cgi-bin/usas.pl', files=files)

            # Column names
            columns = ['Text', 'POS', 'Lemma', 'USAS Tags']

            # Filter out the unwanted lines
            cleaned_lines = [line for line in response.text.splitlines() if line and not line.startswith('<')]

            # Convert the list back to a string and read it into a DataFrame
            cleaned_text = '\n'.join(cleaned_lines)
            en_tagged = pd.read_csv(io.StringIO(cleaned_text), sep='\t', names=columns, header=None)

            # Split the tags and keep only the first tag
            en_tagged['USAS Tags'] = en_tagged['USAS Tags'].str.split().str[0]

            # Remove '+' and '-'
            en_tagged['USAS Tags'] = en_tagged['USAS Tags'].str.replace('[+-]', '', regex=True)

            merged_df = pd.merge(en_tagged, self.pymusaslist, on='USAS Tags', how='left')
            print(merged_df)
            merged_df.loc[merged_df['Equivalent Tag'].notnull(), 'USAS Tags'] = merged_df['Equivalent Tag'] 
            merged_df = merged_df.drop(['Equivalent Tag'], axis=1)
            tags_to_remove = ['Unmatched', 'Grammatical bin', 'Pronouns', 'Period']
            #merged_df = merged_df[~merged_df['USAS Tags'].str.contains('|'.join(tags_to_remove))]
            return merged_df[['USAS Tags','Text']]

        return None  # Return None if the language is neither 'cy' nor 'en'
    def calculate_measures(self,df,measure,language):
        
        # Convert the frequency column to an integer data type
        df['freq'] = df['freq'].astype(int)
        # Calculate the total number of words in the text
        total_words = df['freq'].sum()
        # Calculate the total number of words in the reference corpus
        if language == 'en':
            ref_words = 968267
        else:
            ref_words = 13487210
        # Calculate the KENESS and log-likelihood measures for each word
        values = []
        for index, row in df.iterrows():
            observed_freq = row['freq']
            expected_freq = row['f_Reference'] * total_words / ref_words
            if measure == 'KENESS' or measure == 'Frequency':
               
                value = math.log(observed_freq / expected_freq) / math.log(2)
            elif measure == 'Log-Likelihood':
               
                value = 2 * (observed_freq * math.log(observed_freq / expected_freq) +
                          (total_words - observed_freq) * math.log((total_words - observed_freq) / (total_words - expected_freq)))
            values.append(value)

    # Add the measure values to the dataframe
        df[measure] = values
        
        return df

    def filter_words(self, word_list):
        """Return a list with stopwords and punctuation removed."""
        return [word for word in word_list if word not in self.STOPWORDS and word not in self.PUNCS]



    def get_wordcloud(self, dataframe,metric,word_list, cloud_shape_path, cloud_outline_color,cloud_type):
        MAX_WIDTH = 2000
        MAX_HEIGHT = 2000
        filtered_words = self.filter_words(word_list)
        
        image_mask = imageio.imread(cloud_shape_path)
        if metric== 'Frequency':
            frequency_dist = Counter(filtered_words)
       
        elif dataframe.empty:
            if word_list == f"No words of type '{cloud_type}' found. Please select another word type.":
                filters = [f"No words of type '{cloud_type}' found. Please select another word type."]
                return f'static/wordcloud/wordcloud.png', filters
            else:
                frequency_dist = Counter(filtered_words)
        elif 'Equivalent Tag' in dataframe.columns:
            frequency_dist = Counter(filtered_words)
        else:
            
            
            frequency_dist = {row['word']: row[metric] for index, row in dataframe.iterrows()}
            frequency_dist = {k: v for k, v in frequency_dist.items() if v >= 0}
        # Create a frequency distribution
        #
       
        
        filters = set(filtered_words)
        max_freq = max(frequency_dist.values())
        scaling_factor = min(1, 500 / max_freq)  # Adjust this divisor (500) as needed
        width = int(MAX_WIDTH * scaling_factor)
        height = int(MAX_HEIGHT * scaling_factor)
        wordcloud = WordCloud(
        width=width,
            height=height, contour_color=cloud_outline_color, contour_width = 1,
        stopwords=self.STOPWORDS,
        mask=image_mask,
        background_color='rgba(255, 255, 255, 0)',  # transparent background
          # Ensure the mode is set to RGBA # Ensure the mode is set to RGBA
        ).generate_from_frequencies(frequency_dist)
        cleanup_old_graphs("/home/khallafn/Freetxt-flask/website/static/wordcloud")
        # Generate a unique image name using the current timestamp
        timestamp = int(time.time())
        wc_image_path = os.path.join("/home/khallafn/Freetxt-flask/website/static/wordcloud", f"wordcloud_{timestamp}.png")
    
        wordcloud.to_file(wc_image_path)

        return f'static/wordcloud/wordcloud_{timestamp}.png',  list(filters)


  
    def compute_word_frequency(self, tokenized_words, language):

       
        fdist = nltk.FreqDist(tokenized_words)
        
        filtered_word_freq = dict((word, freq) for word, freq in fdist.items())
        
        word_freq = pd.DataFrame({
            'word': list(filtered_word_freq.keys()),
            'freq': list(filtered_word_freq.values())
        })
       
        if language == 'en':
            Bnc_corpus = pd.read_csv('/home/khallafn/Freetxt-flask/website/static/keness/Bnc.csv')
            # Merge with BNC corpus
            word_freq = word_freq.merge(Bnc_corpus[Bnc_corpus['word'].isin(word_freq['word'])], how='left', on='word')
            df = word_freq[['word', 'freq', 'f_Reference']]

        else:
            try:
                column_names = ['word', 'f_Reference']
                corcencc_corpus = pd.read_csv('/home/khallafn/Freetxt-flask/website/static/keness/file.raw.pos.sem.wrd.fql', sep='\t', names=column_names)
           
                # Merge with CorCenCC corpus
                word_freq = word_freq.merge(corcencc_corpus[corcencc_corpus['word'].isin(word_freq['word'])], how='right', on='word')
                
                df = word_freq[['word', 'freq', 'f_Reference']]
                
            except pd.errors.ParserError as e:
                print(f"An error occurred while reading the CSV file: {e}")
                df = pd.DataFrame(columns=['word', 'freq', 'f_Reference'])

        return df
    
    def generate_wordcloud_type(self, input_data,cloud_type, language, cloud_measure, wordlist=None):
        json_data = ' '.join(input_data['Text'].tolist())
        all_words = []
        merged_df = pd.DataFrame()
        tokenized_words = [word for word in input_data['Text']]
        print(tokenized_words)
        df = self.compute_word_frequency(tokenized_words, language)
    
        if cloud_type == 'all_words':
            df = self.calculate_measures(df, cloud_measure, language)
            if wordlist:
                df = df[df['word'].isin(wordlist)]
            all_words = df['word'].tolist()
            print('all_words', all_words)
            merged_df = df

        elif cloud_type in ['2_word_clusters', '3_word_clusters', '4_word_clusters']:
            n = int(cloud_type.split('_')[0])
                # Generate all possible n-grams from the list of tokenized words
            n_grams = set(nltk.ngrams(tokenized_words, n))
    
            # Join the words in each n-gram to form a single string separated by space
            all_words = [' '.join(g) for g in n_grams]
            if wordlist:
                all_words = [word for word in all_words if all(sub_word in wordlist for sub_word in word.split())]

        elif cloud_type in ['nouns', 'proper_nouns', 'verbs', 'adjectives', 'adverbs', 'numbers']:
            pos_dict = {
                'nouns': 'NOUN', 'proper_nouns': 'PROPN', 'verbs': 'VERB',
                'adjectives': 'ADJ', 'adverbs': 'ADV', 'numbers': 'NUM'
            }
            doc = nlp(json_data)
            print('doc',doc)
            all_words = [token.text for token in doc if token.pos_ == pos_dict[cloud_type]]
            print(all_words)
            if not all_words:
                return f"No words of type '{cloud_type}' found. Please select another word type.", pd.DataFrame()
            df = self.compute_word_frequency(all_words, language)
            merged_df = self.calculate_measures(df, cloud_measure, language)
            if wordlist:
                all_words = [word for word in all_words if word in wordlist]
                merged_df = merged_df[merged_df['word'].isin(wordlist)]

        elif cloud_type == 'semantic_tags':
            #tags = self.Pymsas_tags(input_data)
            tags = pd.DataFrame(input_data['USAS Tags'].tolist())
            tags_freq = tags.value_counts().reset_index(name='Frequency')
            tags_freq.columns = ['Tag', 'Frequency']  # Rename columns to be more descriptive
            Tags_f_reference = pd.DataFrame()

            # Handle semantic tags based on language
            if language == 'en':
                tags_freq.columns = ['USAS Tags', 'freq']
                Bnc_sementic_tags = pd.read_csv('/home/khallafn/Freetxt-flask/website/static/keness/BNC_semantictags.csv')
                merged_df = pd.merge(tags_freq, Bnc_sementic_tags, on='USAS Tags', how='inner')
                merged_df = merged_df.rename(columns={'USAS Tags': 'word', 'f_reference': 'f_Reference'})
                Tags_f_reference = self.calculate_measures(merged_df[['word', 'freq', 'f_Reference']], cloud_measure, language)

            else:
                tags_freq.columns = ['Equivalent Tag', 'freq']
                corcencc_sementic_tags = pd.read_csv('/home/khallafn/Freetxt-flask/website/static/keness/Cy_tags.csv')
                merged_df = pd.merge(tags_freq, corcencc_sementic_tags, on='Equivalent Tag', how='inner')
                merged_df = merged_df.rename(columns={'Equivalent_Tag': 'word', 'f_reference': 'f_Reference'})
                Tags_f_reference = self.calculate_measures(merged_df[['word', 'freq', 'f_Reference']], cloud_measure, language)

            all_words = Tags_f_reference['word'].tolist()
            merged_df = Tags_f_reference

            if wordlist:
                all_words = [word for word in all_words if word in wordlist]
                merged_df = merged_df[merged_df['word'].isin(wordlist)]
            if not all_words:
                return f"No words of type '{cloud_type}' found. Please select another word type.", pd.DataFrame()

        else:
            return None, None

        return all_words, merged_df    



    def generate_wordcloud(self, cloud_shape_path, cloud_outline_color, cloud_type, language,cloud_measure, wordlist={}):
        
        words_for_cloud, df = self.generate_wordcloud_type(self.tokens_with_semantic_tags, cloud_type, language, cloud_measure,wordlist)
        return self.get_wordcloud(df,cloud_measure,words_for_cloud, cloud_shape_path, cloud_outline_color,  cloud_type)