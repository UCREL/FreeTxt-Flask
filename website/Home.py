from flask import render_template
from flask import Blueprint
from flask import request, jsonify
from .models import Feedback
from . import db

Home = Blueprint('home', __name__)
Userguide = Blueprint('userguide', __name__)
About = Blueprint('about', __name__)


@Userguide.route('/userguide')
def userguide():
    return render_template('User-Guide.html')
@Home.route('/', methods=['GET', 'POST'])
def home():
    return render_template('Home.html')
@About.route('/about')
def about():
    return render_template('About.html')


