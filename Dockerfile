FROM python:3

COPY . /opt/FreeTxt
WORKDIR /opt/FreeTxt

ENV FLASK_APP=main.py

RUN pip install --upgrade pip && \
    pip install -r requirements.txt

CMD [ "flask", "run" ]
EXPOSE 5000