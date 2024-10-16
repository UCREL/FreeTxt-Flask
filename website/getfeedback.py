from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
import csv

# Define your database connection string
DATABASE_URI = 'sqlite:////var/freetxt/feedback.db' 

# Define the Feedback model structure
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, Text

Base = declarative_base()

class Feedback(Base):
    __tablename__ = 'feedback'
    id = Column(Integer, primary_key=True)
    role = Column(String(100))
    first_time = Column(String(50))
    future_use = Column(Integer)
    ease_of_use = Column(Integer)
    liked_tools = Column(String(500))
    least_liked_tools = Column(String(500))
    future_anticipation = Column(Text)
    additional_functionalities = Column(Text)
    additional_comments = Column(Text)

# Create an engine and session to access the database
engine = create_engine(DATABASE_URI)
Session = sessionmaker(bind=engine)
session = Session()

# Query all records from the Feedback table
feedbacks = session.query(Feedback).all()

# Define CSV file location
csv_file_path = '/freetxt/website/feedback_data.csv'

# Write data to CSV
with open(csv_file_path, 'w', newline='', encoding='utf-8') as csvfile:
    fieldnames = ['id', 'role', 'first_time', 'future_use', 'ease_of_use', 'liked_tools', 'least_liked_tools', 'future_anticipation', 'additional_functionalities', 'additional_comments']
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)

    writer.writeheader()
    for feedback in feedbacks:
        writer.writerow({
            'id': feedback.id,
            'role': feedback.role,
            'first_time': feedback.first_time,
            'future_use': feedback.future_use,
            'ease_of_use': feedback.ease_of_use,
            'liked_tools': feedback.liked_tools,
            'least_liked_tools': feedback.least_liked_tools,
            'future_anticipation': feedback.future_anticipation,
            'additional_functionalities': feedback.additional_functionalities,
            'additional_comments': feedback.additional_comments
        })

print("Data exported successfully to", csv_file_path)
