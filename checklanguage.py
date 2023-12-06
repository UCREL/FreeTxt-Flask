import pandas as pd
from langdetect import detect

class LanguageChecker:
    """
    A class for detecting and handling multiple languages within a pandas dataframe.

    Attributes:
    data (pd.DataFrame): The dataframe containing the text data.
    column (str): The name of the column that contains the text.

    Methods:
    detect_language_file(text): Detects the language of a given text string.
    detect_and_split_languages(): Splits the dataframe into separate dataframes based on language detection.
    """
    
    def __init__(self, data, column):
        """
        Initializes the LanguageChecker with a dataframe and a specific column name.

        Parameters:
        data (pd.DataFrame): The dataframe containing the text data.
        column (str): The column name where the text is stored.
        """
        self.data = data
        self.column = column

    def detect_language_file(self, text):
        """
        Detects the language of the given text using the langdetect library.

        Parameters:
        text (str): The text string for which the language needs to be detected.

        Returns:
        str: The language code (e.g., 'en' for English) or None if detection fails.
        """
        try:
            return detect(text)
        except:
            return None

    def detect_and_split_languages(self):
        """
        Adds a language detection column to the dataframe and splits it based on the detected languages.

        Returns:
        tuple: Two dataframes, one for English ('en') texts and another for Welsh ('cy') texts.
        """
        self.data[self.column + '_Language'] = self.data[self.column].apply(self.detect_language_file)
        unique_languages = self.data[self.column + '_Language'].unique()

        english_data, welsh_data = None, None
        if 'en' in unique_languages:
            english_data = self.data[self.data[self.column + '_Language'] == 'en']
        if 'cy' in unique_languages:
            welsh_data = self.data[self.data[self.column + '_Language'] == 'cy']

        return english_data, welsh_data

