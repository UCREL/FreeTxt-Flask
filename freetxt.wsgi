import sys
import os




# Append your app's directory to the Python path
sys.path.insert(0, './Freetxt-flask')

# Set environment variables if necessary
os.environ['TRANSFORMERS_CACHE'] = './Freetxt-flask/huggingface_cache'
os.environ['MPLCONFIGDIR'] = './Freetxt-flask/huggingface_cache'

from main import app as application
