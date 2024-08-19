FROM python:3.10-bookworm

ENV FLASK_APP=main.py
ENV PATH="/home/user/.local/bin:$PATH"

ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update && apt-get install -y python3-dev libevent-dev build-essential software-properties-common libpangocairo-1.0-0

RUN useradd -m user && \
    chown -R user:user /home/user && \
    mkdir -p /cache && \
    mkdir -p /var/freetxt && \
    chown -R user:user /cache && \
    chown -R user:user /var/freetxt
USER user

COPY --chown=user:user requirements.txt /freetxt/requirements.txt
WORKDIR /freetxt

RUN pip install --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt && \
    python3 -m nltk.downloader all

COPY --chown=user:user . /freetxt

CMD [ "python3", "main.py" ]
EXPOSE 8000



#RUN python3 -m venv venv && \
#    . ./venv/bin/activate && \
#    pip install --upgrade pip && \
#    pip install --no-cache-dir -r requirements.txt

#ENV VIRTUAL_ENV /freetxt/venv
#ENV PATH /freetxt/venv/bin:$PATH