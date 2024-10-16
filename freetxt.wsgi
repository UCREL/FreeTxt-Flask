import sys
import os


# Activate the virtual environment
#activate_this = '/freetxt/venv/bin/activate'
#with open(activate_this) as file_:
 #   exec(file_.read(), dict(__file__=activate_this))

# Append your app's directory to the Python path
sys.path.insert(0, '/freetxt')

# Set environment variables if necessary
os.environ['TRANSFORMERS_CACHE'] = '/cache/huggingface_cache'
os.environ['MPLCONFIGDIR'] = '/cache/huggingface_cache'

from main import app as application
