# The FreeTxt app

Here is the [link to FreeTxt app](https://www.freetxt.app/) which is currently under development. 

- FreeTxt was developed as part of an AHRC funded collaborative FreeTxt supporting bilingual free-text survey and questionnaire data analysis research project involving colleagues from Cardiff University and Lancaster University (Grant Number AH/W004844/1).

- The team included PI - Dawn Knight; CIs - Paul Rayson, Mo El-Haj; RAs - Ignatius Ezeani, Nouran Khallaf and Steve Morris. The Project Advisory Group included representatives from: National Trust Wales, Cadw, Museum Wales, CBAC | WJEC and National Centre for Learning Welsh.

- For further information on the FreeTxt project please contact the project team: CorCenCC@Cardiff.ac.uk

# SentimentAnalyser Class

## Overview

`SentimentAnalyser` is a Python class that leverages a pre-trained BERT model for sentiment analysis on textual data. It can process texts in different languages and is equipped to handle both English and Welsh languages specifically.

## Initialisation

Initializes the sentiment analysis model and tokenizer upon instantiation.

## Methods

### `preprocess_text(text)`
- **Purpose**: Prepares the text for sentiment analysis by removing URLs, mentions, hashtags, punctuation, converting to lowercase, and removing stopwords.
- **Parameters**:
  - `text` (str): The text string to preprocess.
- **Returns**: Preprocessed text.

### `analyse_sentiment(input_text, language, num_classes, max_seq_len=512)`
- **Purpose**: Conducts sentiment analysis on the input text.
- **Parameters**:
  - `input_text` (str): The text to analyze.
  - `language` (str): The language of the text ('en' for English, 'cy' for Welsh).
  - `num_classes` (int): Number of sentiment classes (3 or 5).
  - `max_seq_len` (int, optional): Maximum sequence length for tokenization.
- **Returns**: A tuple containing the sentiments and sentiment counts.

### `generate_scattertext_visualization(dfanalysis, language)`
- **Purpose**: Generates a scattertext visualization based on sentiment analysis results.
- **Parameters**:
  - `dfanalysis` (pd.DataFrame): DataFrame containing the sentiment analysis results.
  - `language` (str): The language for the visualization.
- **Returns**: A path to the generated scattertext visualization HTML file.

This class is suitable for projects requiring detailed sentiment analysis and visualization, especially in bilingual contexts.


## Summariser class
### run_summarizer Function Overview

The `run_summarizer` function is designed to provide a concise summary of a given text using the TextRank algorithm. This function is versatile, as it can accept both strings and iterable objects as input. If the input is not a string, the function converts it into one. The core of this function lies in its ability to adjust the length of the summary based on the `chosen_ratio` parameter, which dictates the proportion of the original text to be included in the summary.

### Key Features

- **Input Flexibility**: Handles both string and iterable inputs, seamlessly converting iterables into a string format.
- **Customizable Summary Length**: Allows the user to specify the summary length through the `chosen_ratio` parameter, with a minimum threshold set at 0.1.
- **Language Support**: Primarily supports English (default) and welsh but can be adapted for other languages.

# LanguageChecker Class

## Overview

`LanguageChecker` is a Python class designed for efficient language detection and segregation within pandas dataframes. It is particularly useful for processing multilingual text datasets and can specifically handle English and Welsh texts.

## Initialisation

- **Dataframe (`data`)**: The pandas dataframe to be processed.
- **Column Name (`column`)**: The name of the column in the dataframe containing the text.

## Methods

### `detect_language_file(text)`
- **Purpose**: Identifies the language of a given text string.
- **Parameters**:
  - `text` (str): The text string for language detection.
- **Returns**: A language code (e.g., 'en', 'cy') if successful, or `None` if the detection fails.

### `detect_and_split_languages()`
- **Purpose**: Enhances the dataframe by adding a language identification column and then segregates the data into separate dataframes based on the detected languages.
- **Returns**: A tuple of two dataframes, one with all English texts (`'en'`) and the other with all Welsh texts (`'cy'`), if present.

This class is an essential tool for projects dealing with bilingual or multilingual datasets, offering streamlined processing for language-specific analysis or operations.

## Contacts
- [Nouran Khallaf](https://github.com//Nouran-Khallaf)
- [Ignatius Ezeani](https://github.com/IgnatiusEzeani)
- [Paul Rayson](https://github.com/perayson)
- [Mahmoud El-Haj](https://github.com/drelhaj)
- [Dawn Knight](https://github.com/DawnKnight-Cardiff)

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons Licence" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a>
- This work with all the accompanying resources is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 
FreeTxt is licensed under Apache 2.0 and thus is freely available for use by professional communities and individuals with an interest in language analysis.

## Citation

If you use FreeTxt in your research or project, please cite it as follows:

Khallaf, N., Ezeani, I., Knight, D., Rayson, P., El-Haj, M. and Morris, S. (2023). FreeTxt – A Bilingual Free-Text Analysis and Visualisation Toolkit [Software]. Cardiff University and Lancaster University. Available at: [www.freetxt.app](http://www.freetxt.app)


