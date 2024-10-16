import os
import shutil

def clear_directories():
    directories_to_clear = [
        '/freetxt/website/Uploaded',
        '/freetxt/website/static/wordcloud'
    ]
    for directory in directories_to_clear:
        if os.path.exists(directory):
            shutil.rmtree(directory)
            os.makedirs(directory, exist_ok=True)
            print(f"Cleared contents of {directory}")
