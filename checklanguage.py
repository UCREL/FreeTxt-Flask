import os
import pandas as pd
from langdetect import detect

class LanguageChecker:
    def __init__(self, data, column):
        self.data = data
        self.column = column

    def detect_language_file(self, text):
        try:
            return detect(text)
        except:
            return None

    def detect_and_split_languages(self):
        self.data[self.column + '_Language'] = self.data[self.column].apply(self.detect_language_file)
        unique_languages = self.data[self.column + '_Language'].unique()

        english_data, welsh_data = None, None
        if 'en' in unique_languages:
            english_data = self.data[self.data[self.column + '_Language'] == 'en']
        if 'cy' in unique_languages:
            welsh_data = self.data[self.data[self.column + '_Language'] == 'cy']

        return english_data, welsh_data
