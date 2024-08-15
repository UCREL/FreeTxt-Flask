# feedback.py
from flask import Blueprint, request, jsonify
from .extensions import db
from .models import Feedback

# Define the blueprint
feedback_bp = Blueprint('feedback', __name__)

# Define the route for submitting feedback
@feedback_bp.route('/submitfeedback', methods=['POST'])
def submitfeedback():
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
