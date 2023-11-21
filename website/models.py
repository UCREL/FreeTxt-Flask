from .extensions import db

class Feedback(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    role = db.Column(db.String(100))
    first_time = db.Column(db.String(50))
    future_use = db.Column(db.Integer)
    ease_of_use = db.Column(db.Integer)
    liked_tools = db.Column(db.String(500))  # Storing liked tools as a concatenated string
    least_liked_tools = db.Column(db.String(500))  # Storing least liked tools similarly
    future_anticipation = db.Column(db.Text)
    additional_functionalities = db.Column(db.Text)
    additional_comments = db.Column(db.Text)
    
