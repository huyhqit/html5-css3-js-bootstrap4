FROM passcareer/docs

RUN mkdir /code
WORKDIR /code

ADD . /code
