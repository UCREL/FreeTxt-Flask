import os
import shutil

def clear_directories():
    # Absolute paths to the directories
    directories_to_clear = [
        '/freetxt/website/Uploaded',
        '/freetxt/website/static/wordcloud'
    ]

    for directory in directories_to_clear:
        if os.path.exists(directory):
            shutil.rmtree(directory)  # Remove the directory and all its contents
            os.makedirs(directory, exist_ok=True)  # Recreate the empty directory
            print(f"Cleared contents of {directory}")
