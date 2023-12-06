from nltk import sent_tokenize
from summa.summarizer import summarize as summa_summarizer

def text_rank_summarize(article, ratio):
    """
    Summarize the given article using the TextRank algorithm.

    Parameters:
    article (str): The text to be summarized.
    ratio (float): A number between 0 and 1 that determines the proportion of the number of sentences in the original text to be included in the summary.

    Returns:
    str: The summarized text.
    """
    return summa_summarizer(article, ratio=ratio)

def run_summarizer(input_text, chosen_ratio, lang='en'):
    """
    Summarizes the input text using the TextRank algorithm, with a fallback to the first sentence if the summary is empty.

    Parameters:
    input_text (str or iterable): The text to be summarized. If it's not a string, it will be converted to one.
    chosen_ratio (float): A number between 0 and 1 that determines the proportion of the original text to be included in the summary. It's capped at a minimum of 0.1.
    lang (str, optional): The language code for the text (default is 'en' for English).

    Returns:
    str: The summary of the input text or the first sentence if the summary is empty.
    """
    # Convert input_text to a string if it isn't already
    if not isinstance(input_text, str):
        input_text = ' '.join(map(str, input_text))
    
    # Ensure the chosen_ratio is at least 0.1
    chosen_ratio = max(chosen_ratio, 0.1)

    # Get the summary using the text_rank_summarize function
    summary = text_rank_summarize(input_text, ratio=chosen_ratio)
    
    # Tokenize input_text to sentences
    sentences = sent_tokenize(input_text)
    
    # Return the summary or fallback if the summary is empty
    if summary:
        return summary
    elif len(sentences) > 1:
        return sentences[0]
    else:
        return "Unable to summarize the input text."
