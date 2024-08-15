import string
import io
import re
import time
import requests
from langdetect import detect 
import os 
import nltk
from collections import Counter
import spacy
from flask import Flask, render_template, request, jsonify
import pandas as pd
import networkx as nx
from pyvis.network import Network
from flask import current_app
import math
STOPWORDS = set(["a", "an", "the", "and", "or", "in", "of", "to", "is", "it", "that", "on", "was", "for", "as", "with", "by"])  # Modify with actual stopwords
PUNCS = string.punctuation
nlp = spacy.load('/freetxt/en_core_web_sm-3.2.0')


PUNCS += '''!→()-[]{};:"\,<>./?@#$%&*_~.'''
import time
import os

def cleanup_old_graphs(subdirectory, age_in_seconds=20):
    # Construct the path to the subdirectory within the static directory
    directory = os.path.join(current_app.static_folder, subdirectory)

    # Ensure the directory exists to avoid FileNotFoundError
    if not os.path.exists(directory):
        print(f"Directory {directory} does not exist. Creating...")
        os.makedirs(directory)

    current_time = time.time()

    # Iterate through files in the specified directory
    for filename in os.listdir(directory):
        if filename.startswith("network_") and filename.endswith(".html"):
            file_timestamp = int(filename.split("_")[1].split(".")[0])
            file_age = current_time - file_timestamp

            # Remove the file if it is older than the specified age
            if file_age > age_in_seconds:
                file_path = os.path.join(directory, filename)
                os.remove(file_path)
                print(f"Removed old graph: {filename}")

class KWICAnalyser:

    def __init__(self, text_or_dataframe,language):
        # If the input is a DataFrame, extract text from its single column
        if isinstance(text_or_dataframe, pd.DataFrame):
            
            self.text_rows = [self._preprocess_text(row) for row in text_or_dataframe.iloc[:, 0]]
        else:
            # If the input is a single string
            self.text_rows = [self._preprocess_text(text_or_dataframe)]
        self.pymusaslist = pd.read_csv('/freetxt/website/data/Pymusas-list.txt', names=['USAS Tags', 'Equivalent Tag'])
        self.text = self.text_rows
        
        #self.tokens_with_tags = self._tag_text(self.text)  # Use the preprocessed text for tagging
        self.lang_detected= language
        self.welsh_pos_mapping = {
                "E": "NOUN",
                "E": "PROPN",
                "YFB": "art",
                "YFB": "det",
                "Ar": "prep",
                "Cys": "conj",
                "Rhi": "NUM",
                "Ans": "ADJ",
                "Adf": "ADV",
                "B": "VERB",
                "Rha": "pron",
                "U": "part",
                "Ebych": "intj",
                "Gw": "xx",
                "Gw": "fw",
                "Gw": "code",
                "Atd": "punc",
            }
        
        self.claws_c7_mapping = {
    'NOUN': ['NN', 'NN1', 'NN2', 'NNJ', 'NNK', 'NN@', 'NNS', 'NN', 'NN1', 'NN2', 'NNA', 'NNB', 'NNB1', 'NNB2', 'NND1', 'NND2', 'NNL1', 'NNL2', 'NNM1', 'NNM2', 'NNO', 'NNO1', 'NNO2', 'NNT1', 'NNT2', 'NNU', 'NNU1', 'NNU2', 'NNV', 'NNV1', 'NNV2'],
    'PROPN': ['NP', 'NP1', 'NP2', 'NPD', 'NPM', 'NP', 'NP1', 'NP2', 'NPD1', 'NPD2', 'NPM1', 'NPM2'],
    'VERB': ['VBB', 'VBD', 'VBG', 'VBI', 'VBM', 'VBN', 'VBZ', 'VDB', 'VDD', 'VDG', 'VDI', 'VDN', 'VDZ', 'VHB', 'VHD', 'VHG', 'VHI', 'VHN', 'VHZ', 'VM0', 'VVB', 'VVD', 'VVG', 'VVN', 'VVI', 'VVZ', 'VB0', 'VBDR', 'VBDZ', 'VBG', 'VBI', 'VBM', 'VBN', 'VBZ', 'VDB', 'VDD', 'VDG', 'VDI', 'VDN', 'VDZ', 'VHB', 'VHD', 'VHG', 'VHI', 'VHN', 'VHZ', 'VM0', 'VVB', 'VVD', 'VVG', 'VVN', 'VVI', 'VVZ'],
    'ADJ': ['JJ', 'JJ@', 'JJR', 'JJT', 'JJ', 'JJR', 'JJT'],
    'ADV': ['RA', 'RE', 'RG', 'RL', 'RP', 'RP@', 'RPA', 'RPH', 'RPK', 'RR', 'RR@', 'RRQ', 'RRR', 'RRT', 'RA', 'RE', 'REX', 'RG', 'RGQ', 'RGQV', 'RGR', 'RGT', 'RL', 'RP', 'RPK', 'RR', 'RRQ', 'RRR', 'RRT', 'RT'],
    'NUM': ['MC', 'MC1', 'MC2', 'MD', 'MD1', 'MD2', 'MF', 'MF1', 'MF2', 'MH', 'MH1', 'MH2', 'MI', 'MI1', 'MI2', 'MN', 'MN1', 'MN2', 'MO', 'MO1', 'MO2', 'MP', 'MP1', 'MP2', 'MS', 'MS1', 'MS2', 'MT', 'MT1', 'MT2', 'MC', 'MC1', 'MC2', 'MD', 'MD1', 'MD2', 'MF', 'MF1', 'MF2'],
    'pronouns': ['PNP', 'PNQ', 'PNX', 'PPGE', 'PPH1', 'PPHO1', 'PPHO2', 'PPHS1', 'PPHS2', 'PPY', 'PN', 'PN1', 'PNQ', 'PNQO', 'PNQS', 'PNQV', 'PNX1', 'PNX2', 'PPGE', 'PPH1', 'PPHO1', 'PPHO2', 'PPHS1', 'PPHS2', 'PPIO1', 'PPIO2', 'PPIS1', 'PPIS2', 'PPX1', 'PPX2', 'PPY'],
    'determiners': ['DA', 'DAR', 'DAT', 'DB', 'DB2', 'DD', 'DD1', 'DD2', 'DDQ', 'DDQGE', 'DDQV', 'DT', 'DT0', 'DTQ', 'AT', 'AT1', 'DA2', 'DB', 'DB2', 'DD', 'DD1', 'DD2', 'DDQ', 'DDQGE', 'DDQV', 'DT', 'DT0', 'DTQ'],
    'prepositions': ['II', 'IO', 'IW', 'IF', 'II', 'IO', 'IW', 'TO'],
    'conjunctions': ['CC', 'CS', 'CCB', 'CSA', 'CST', 'CSW'],
    'interjections': ['UH'],
    'modal_verbs': ['VM'],
    'negations': ['XX'],
    'symbols': ['ZZ', 'ZZ1', 'ZZ2'],
    'foreign_words': ['FW'],
    'existential_there': ['EX'],
    'general': ['FO', 'FU', 'FW', 'GE', 'JK', 'ND']}
        
        
       
        self.tokens_with_semantic_tags = self.tag_semantics(self.text)  # Store the semantic tags
        print(len(self.tokens_with_semantic_tags))

        self.PUNCS = [".", ",", "!", ":", ";", "-", "_", "?", "&", "*", "(", ")", "$", "@", "#", "%", "^", "+", "=", "<", ">", "/", "|", "]", "[", "{", "}", "\\", "'", "\""]
        #self.sementic_tags = pd.read_csv('website/data/Cy_tags.csv')
        


    def _preprocess_text(self, text):
        # Convert to lowercase
        text = text.lower()
        # Remove punctuation
        #text = ''.join([char for char in text if char not in PUNCS])
        # Remove stopwords
        #text = " ".join(word for word in text.split() if word not in STOPWORDS)
    #
        return text
    def get_kwic(self, keyword, window_size=5, max_instances=30, lower_case=False, by_tag=False, by_sem=False):
        
        tokens = [token for token,pos, tag in self.tokens_with_semantic_tags]
        if by_tag or by_sem:
            if by_tag:
                
                keyword_indexes = [i for i, (token,pos, tag) in enumerate(self.tokens_with_semantic_tags) if pos == keyword]
            else:  # by_sem
               
                keyword_indexes = [i for i, (token,pos, tag) in enumerate(self.tokens_with_semantic_tags) if tag == keyword]
            
        else:
            if lower_case:
                keyword = keyword.lower()
                keyword_indexes = [i for i, token in enumerate(tokens) if token.lower() == keyword]
            else:
                keyword_indexes = [i for i, token in enumerate(tokens) if token.lower() == keyword.lower()]
        if not keyword_indexes:
            
            return []
            
        #print("Tokens:", tokens) 
        # Identify sentence boundaries
        sentence_boundaries = []
        start = None
        for i, (token, pos, sem_tag) in enumerate(self.tokens_with_semantic_tags):
            if token == 'stt' and start is None:
                start = i
            elif token == 'edd' and start is not None:
                sentence_boundaries.append((start, i))
                start = None

        # Process each sentence to find keyword and its context
        kwic_insts = []
        for start, end in sentence_boundaries:
            sentence_tokens = tokens[start:end + 1]
            for i, (token, pos, sem_tag) in enumerate(self.tokens_with_semantic_tags[start:end + 1]):
                match = False
                if by_tag:
                    match = pos == keyword
                elif by_sem:
                    match = sem_tag == keyword
                else:
                    match = (token.lower() if lower_case else token) == keyword.lower()

                if match:
                    left_context_index = max(i - window_size, 0)
                    right_context_index = min(i + window_size + 1, len(sentence_tokens))
                    left_context = ' '.join(t for t, _, _ in self.tokens_with_semantic_tags[start+left_context_index:start+i] if t not in ['stt', 'edd'])
                    right_context = ' '.join(t for t, _, _ in self.tokens_with_semantic_tags[start+i+1:start+right_context_index] if t not in ['stt', 'edd'])
                    kwic_insts.append((left_context, token, right_context))
                    if len(kwic_insts) >= max_instances:
                        return kwic_insts

        return kwic_insts

    
    def get_top_n_words(self, remove_stops=False, topn=30):
        text_tokens = [word for word in self.text.split() if word not in STOPWORDS] if remove_stops else self.text.split()
        return Counter(text_tokens).most_common(topn)

    def get_collocs(self, kwic_insts, topn=30):
        words = []
        for l, t, r in kwic_insts:
        # consider only the word immediately before the keyword
            if l.split():
                words.append(l.split()[-1])
            # consider only the word immediately after the keyword
            if r.split():
                words.append(r.split()[0])
        all_words = [word for word in words if word not in STOPWORDS]
        collocs =Counter(all_words).most_common(topn)
        return collocs

    def plot_coll_14(self, keyword, collocs, output_file='network.html'):
        words, counts = zip(*collocs)
        top_collocs_df = pd.DataFrame(collocs, columns=['word', 'freq'])
        visualisation_text_en = "Visualisation by"
        visualisation_text_cy = "Gweledigaeth gan"
        if self.lang_detected == 'en':
            visualisation_text = visualisation_text_en
        elif self.lang_detected == 'cy':
             visualisation_text = visualisation_text_cy
        top_collocs_df.insert(1, 'source', keyword)
        top_collocs_df = top_collocs_df[top_collocs_df['word'] != keyword]  # remove row where keyword == word
        G = nx.from_pandas_edgelist(top_collocs_df, source='source', target='word', edge_attr='freq')
        n = max(counts)
        print(G.nodes())
        most_frequent_word = max(collocs, key=lambda x: x[1])[0]

        net = Network(notebook=True, height='750px', width='100%')
        gravity = -200 * n / sum(counts)
        net.barnes_hut(gravity=gravity* 30)

        for node, count in zip(G.nodes(), counts):
            node_color = 'green' if node == most_frequent_word else 'gray' if node == keyword else 'blue'
            node_size = 80 * count / n
            font_size = max(6, int(node_size / 2))
            net.add_node(node, label=node, title=node, color=node_color, size=node_size, font={'size': font_size, 'face': 'Arial'})

        for source, target, freq in top_collocs_df[['source', 'word', 'freq']].values:
            if source in net.get_nodes() and target in net.get_nodes():
                net.add_edge(source, target, value=freq)

        cleanup_old_graphs("/freetxt/website/static/network_graphs")
        timestamp = int(time.time())
        
        
        graph_folder = "/freetxt/website/static/network_graphs"
        filename = f"network_{timestamp}.html"
        graph_path = os.path.join(graph_folder, filename)

    # Save the graph to the specified path
        original_working_dir = os.getcwd()
        os.chdir(graph_folder)
        net.save_graph(graph_path)
        os.chdir(original_working_dir)  # Revert to the original working directory

       # Read the saved HTML file
        with open(graph_path, "r", encoding='utf-8') as file:
             html = file.read()

    # Add the "Visualisation by" text and logo
        addition = f"""
    <div style="text-align:center; margin-top:30px;">
        {visualisation_text} <img src="https://ucrel-freetxt-2.lancs.ac.uk/static/images/logo.png" alt="Logo" style="height:40px;">
    </div>
    """
        html += addition

    # Write the updated HTML content back to the file
        with open(graph_path, "w", encoding='utf-8') as file:
           file.write(html)

    # Return the relative path to the saved graph
        return f"/static/network_graphs/{filename}"


    def _compute_mi_and_ll(self, word_freq, coll_freq, joint_freq):
        """
        Computes the Mutual Information (MI) and Log-Likelihood (LL) values for a given word and collocate.

        Parameters:
        - word_freq (int): The frequency of the target word.
        - coll_freq (int): The frequency of the collocate.
        - joint_freq (int): The joint frequency of both the target word and the collocate appearing together.

        Returns:
        - tuple: The computed MI and LL values.
        """

        O11 = joint_freq
        O12 = word_freq - O11
        O21 = coll_freq - O11
        O22 = len(self.tokens_with_semantic_tags) - O11 - O12 - O21

        # Expected frequencies
        E11 = (word_freq * coll_freq) / len(self.tokens_with_semantic_tags) if len(self.tokens_with_semantic_tags) != 0 else 0
        E12 = (word_freq * (len(self.tokens_with_semantic_tags) - coll_freq)) / len(self.tokens_with_semantic_tags) if len(self.tokens_with_semantic_tags) != 0 else 0
        E21 = ((len(self.tokens_with_semantic_tags) - word_freq) * coll_freq) / len(self.tokens_with_semantic_tags) if len(self.tokens_with_semantic_tags) != 0 else 0
        E22 = ((len(self.tokens_with_semantic_tags) - word_freq) * (len(self.tokens_with_semantic_tags) - coll_freq)) / len(self.tokens_with_semantic_tags) if len(self.tokens_with_semantic_tags) != 0 else 0

        # Mutual Information calculation
        MI = math.log2(O11/E11) if O11 > 0 and E11 > 0 else 0

        # Log-Likelihood calculation
        LL_11 = O11 * math.log(O11/E11) if O11 > 0 and E11 != 0 else 0
        LL_12 = O12 * math.log(O12/E12) if O12 > 0 and E12 != 0 else 0
        LL_21 = O21 * math.log(O21/E21) if O21 > 0 and E21 != 0 else 0
        LL_22 = O22 * math.log(O22/E22) if O22 > 0 and E22 != 0 else 0
        
        LL2 = 2 * (LL_11 + LL_12 + LL_21 + LL_22)
        LL2 = max(0, LL2)

        return round(MI,2), round(LL2,2)
    def get_collocation_strength(self, keyword, topn=30, window_size=5, by_tag=False, by_sem=False):
        """
        Computes collocations around a keyword based on strength using MI and LL.

        Parameters:
        - keyword (str): The target keyword around which collocations are to be found.
        - topn (int, optional): Number of top collocations to return. Defaults to 30.
        - window_size (int, optional): The number of words before and after the keyword to consider. Defaults to 5.
        - by_tag (bool, optional): If true, consider the keyword as a POS tag instead of a word. Defaults to False.

        Returns:
        - List[Tuple[str, float, float]]: A list of tuples where each tuple contains a collocation word, 
                                          its Mutual Information score, and its Log-Likelihood score, sorted 
                                          by MI and then LL in descending order.
        """

            # Get KWIC instances
        print('keyword',keyword)
        kwic_insts = self.get_kwic(keyword, window_size=window_size, max_instances=100000, by_tag=by_tag, by_sem=by_sem)
        
        # Compute the collocates
        collocs = self.get_collocs(kwic_insts)
       

        # Compute the word and collocate frequencies
        if by_sem:
            word_freq = sum(1 for token, pos, tag in self.tokens_with_semantic_tags if tag == keyword)
        elif by_tag:
            word_freq = sum(1 for token, pos, tag in self.tokens_with_semantic_tags if pos == keyword)

        else:
            word_freq = sum(1 for token, pos, tag in self.tokens_with_semantic_tags if token.lower() == keyword.lower())
    
        # Compute MI and LL values for each collocate
        results = []
        for collocate, joint_freq in collocs:
            coll_freq = sum(1 for token,pos, tag in self.tokens_with_semantic_tags if token.lower() == collocate.lower())
            MI, LL2 = self._compute_mi_and_ll(word_freq, coll_freq, joint_freq)
            results.append((collocate, MI, LL2))
        

        # Sort results by MI and LL in descending order
        return sorted(results, key=lambda x: (-x[1], -x[2]))
    

    def tag_semantics(self, text):
        """
        Function to tag the input text with semantic tags using the Pymsas API.
        
        """
         # Concatenate all texts with unique start and end tags
        concatenated_text =  " [stt.] " + " [edd.] [stt.] ".join(self.text_rows) + " [edd.] "
        text= concatenated_text
        # Detect the language of the text
          # Detect the language of the concatenated text
        try:
            lang_detected = detect(concatenated_text)
        except:
            lang_detected = 'en'
        tags_to_remove = [ 'Grammatical bin', 'Pronouns', 'Period', 'Being','Discourse Bin','Negative','PUNCT']        

        if lang_detected == 'cy':
            text = text.strip().replace('‘', "'").replace('’', "'")
            # For Welsh language
            files = {
                'type': (None, 'rest'),
                'style': (None, 'tab'),
                'lang': (None, 'cy'),
                'text': text,
            }
            response = requests.post('http://ucrel-api-02.lancaster.ac.uk/cgi-bin/pymusas.pl', files=files)
            
            # Read the response into a DataFrame
            cy_tagged = pd.read_csv(io.StringIO(response.text), sep='\t')
            
            cy_tagged['USAS Tags'] = cy_tagged['USAS Tags'].str.split('[,/mf]').str[0].str.replace('[\[\]"\']', '', regex=True)
            cy_tagged['USAS Tags'] = cy_tagged['USAS Tags'].str.replace('([A-Za-z]+\d+).*', r'\1', regex=True)  # Remove characters following the pattern 'letter + number' 

            cy_tagged['USAS Tags'] = cy_tagged['USAS Tags'].str.split('+').str[0]
            sementic_tags = pd.read_csv('/freetxt/website/data/Welsh_pymusas_list.csv')
            merged_df = pd.merge(cy_tagged, sementic_tags, on='USAS Tags', how='left')
            
            merged_df.loc[merged_df['Equivalent_Tag'].notnull(), 'USAS Tags'] = merged_df['Equivalent_Tag'] 
            #merged_df = merged_df.drop(['Equivalent Tag'], axis=1)
           # merged_df = merged_df[~merged_df['USAS Tags'].isin(tags_to_remove)]
            merged_df = merged_df[merged_df['USAS Tags'].notnull()]
            merged_df['POS'] = merged_df['POS'].map(self.welsh_pos_mapping).fillna('unknown')

           
            
            
            

        elif lang_detected == 'en':
            text = text.translate(str.maketrans('', '', PUNCS))
            files = {
        'type': (None, 'rest'),
        'email': (None, 'hello'),
        'tagset': (None, 'c7'),
        'style': (None, 'tab'),
        'text': (None, text),
        }

            response = requests.post('http://ucrel-api-02.lancaster.ac.uk/cgi-bin/usas.pl', files=files)

            # Column names
            columns = ['Text', 'POS', 'Lemma', 'USAS Tags']

            # Filter out the unwanted lines
            cleaned_lines = [line for line in response.text.splitlines() if line and not line.startswith('<')]

            # Convert the list back to a string and read it into a DataFrame
            cleaned_text = '\n'.join(cleaned_lines)
            
            en_tagged = pd.read_csv(io.StringIO(cleaned_text), sep='\t', names=columns, header=None)

            # Split the tags and keep only the first tag
            en_tagged['USAS Tags'] = en_tagged['USAS Tags'].str.split().str[0]

        
            

            en_tagged['USAS Tags'] = en_tagged['USAS Tags'].str.replace(r'\[.*', '', regex=True)  # Remove everything after [
            en_tagged['USAS Tags'] = en_tagged['USAS Tags'].str.replace(r'\/.*', '', regex=True)  # Remove everything after /
            en_tagged['USAS Tags'] = en_tagged['USAS Tags'].str.replace(r'(\d)[A-Za-z]+', r'\1', regex=True)
            en_tagged['USAS Tags'] = en_tagged['USAS Tags'].str.replace(r'(\+|-)[A-Za-z+-]*', r'\1', regex=True)

            merged_df = pd.merge(en_tagged, self.pymusaslist, on='USAS Tags', how='left')
            
               
            
            merged_df.loc[merged_df['Equivalent Tag'].notnull(), 'USAS Tags'] = merged_df['Equivalent Tag']
            merged_df = merged_df.drop(['Equivalent Tag'], axis=1)
            #merged_df = merged_df[~merged_df['USAS Tags'].isin(tags_to_remove)]
            merged_df = merged_df[merged_df['USAS Tags'].notnull()]
            pos_tag_mapping = {}
            for broader_category, pos_tags in self.claws_c7_mapping.items():
                for pos_tag in pos_tags:
                    pos_tag_mapping[pos_tag] = broader_category
            merged_df['POS'] = merged_df['POS'].replace(pos_tag_mapping)
        
        tokens_with_semantic_tags = [(row['Text'], row['POS'], row['USAS Tags']) for _, row in merged_df.iterrows()]
        print(tokens_with_semantic_tags)
       
        return tokens_with_semantic_tags
  
    def update_graph(keyword, collocs, graph_type, output_file='network.html'):
    # Convert collocs to the required format for your graph function
        words, values = zip(*[(item['word'], item[graph_type]) for item in collocs])
    
    # Creating a DataFrame
        top_collocs_df = pd.DataFrame({
            'word': words,
            graph_type: values
        })
    
    # Inserting the 'source' column with the keyword
        top_collocs_df.insert(1, 'source', keyword)
    
    # Removing rows where keyword == word
        top_collocs_df = top_collocs_df[top_collocs_df['word'] != keyword]
    
    # Creating the network graph
        G = nx.from_pandas_edgelist(top_collocs_df, source='source', target='word', edge_attr=graph_type)
    
        n = max(values)
        most_frequent_word = max(collocs, key=lambda x: x[graph_type])['word']
    
    # Create the network graph
        net = Network(notebook=True, height='750px', width='100%')
        gravity = -200 * n / sum(values)
        net.barnes_hut(gravity=gravity * 30)

    # Set the fixed size for the main node
        fixed_main_node_size = 60

    # Add the main node
        net.add_node(keyword, label=keyword, title=keyword, color='gray', size=fixed_main_node_size, font={'size': 32, 'face': 'Arial'})

    # Adding nodes and edges in a single loop
        for _, row in top_collocs_df.iterrows():
            node = row['word']
            value = row[graph_type]
            node_color = 'green' if node == most_frequent_word else 'blue'
            if graph_type == 'frequency':
                node_size = 100 * value / n
            else:
                node_size = 30 * value / n
            font_size = max(6, int(node_size / 2))
            net.add_node(node, label=node, title=node, color=node_color, size=node_size, font={'size': font_size, 'face': 'Arial'})
            net.add_edge(keyword, node, value=value, color='grey')  # Set edge color to grey

        for source, target, value in top_collocs_df[['source', 'word', graph_type]].values:
            if source in net.get_nodes() and target in net.get_nodes():
                net.add_edge(source, target, value=10-value)
        timestamp = int(time.time())
        graph_folder = "/freetxt/website/static/network_graphs"
        filename = f"network_{timestamp}.html"
   
        graph_path = os.path.join(graph_folder, filename)

    
        original_working_dir = os.getcwd()
        os.chdir(graph_folder)
        
           
        net.save_graph(graph_path)
        # Print the path of the saved graph in the temp directory for debugging
        #print(graph_path)   

        # Revert to the original working directory
        os.chdir(original_working_dir)
       # Return the relative path to the saved graph
        return f"/static/network_graphs/{filename}"
    def get_sorted_unique_tags(self):
    # Assuming self.tokens_with_semantic_tags is a list of tuples (token, semantic_tag)
        semantic_tags = [tag for token,pos, tag in self.tokens_with_semantic_tags]
        sorted_unique_tags = sorted(set(map(str, semantic_tags)))
    
        return sorted_unique_tags

    def filter_words(self, word_tag_pairs):
        """Return a list with stopwords, punctuation, and specific tags removed."""
        
        specific_tokens_to_remove = {'stt', 'edd'}  # Add any specific tokens to remove here
        tags_to_remove = {'Grammatical bin', 'Pronouns', 'Period', 'Being', 'Discourse Bin', 'Negative', 'PUNCT', 'Unmatched'}  # Add any specific tags to remove here

        return [word for word, tag in word_tag_pairs if str(word) not in STOPWORDS and str(word) not in PUNCS and str(word) not in specific_tokens_to_remove and tag not in tags_to_remove]

    def get_word_frequencies(self):
        # Extract tokens and their tags from the tuples
        token_tag_pairs = [(token, tag) for token, pos, tag in self.tokens_with_semantic_tags]

        # Apply the filter to remove stopwords, punctuation, and specific tags
        filtered_tokens = self.filter_words(token_tag_pairs)

        # Calculate word frequencies using nltk.FreqDist
        fdist = nltk.FreqDist(filtered_tokens)

        # Convert the frequency distribution to a dictionary
        word_frequencies = dict(fdist)

        return word_frequencies
