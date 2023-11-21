##cd webtacc  
##. Tacc/bin/activate
##export FLASK_APP=main.py
## flask run 
#from website.logger import EpochLogger
from website import create_app
import gensim

app = create_app(debug=True)
global model_sg 
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
    print(__name__)
    
