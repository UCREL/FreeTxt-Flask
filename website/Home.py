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
@Home.route('/submit-feedback', methods=['POST'])
def submit_feedback():
    if request.method == 'POST':
        # Extract data from the form
        role = request.form.get('role')
        first_time = request.form.get('first_time')
        future_use = request.form.get('future_use')
        ease_of_use = request.form.get('ease_of_use')
        future_anticipation = request.form.get('future_anticipation')
        additional_functionalities = request.form.get('additional_functionalities')
        additional_comments = request.form.get('additional_comments')
        liked_tools = ', '.join(request.form.getlist('likedTools'))
        least_liked_tools = ', '.join(request.form.getlist('least_liked_tools'))

        # Create a Feedback instance
        feedback = Feedback(
            role=role,
            first_time=first_time,
            future_use=future_use,
            ease_of_use=ease_of_use,
            future_anticipation=future_anticipation,
            additional_functionalities=additional_functionalities,
            additional_comments=additional_comments,
            liked_tools=liked_tools,
            least_liked_tools=least_liked_tools
        )
        
        # Add to database
        db.session.add(feedback)
        db.session.commit()

        # Return a JSON response
        return jsonify({'status': 'success', 'message': 'Feedback submitted successfully'})
