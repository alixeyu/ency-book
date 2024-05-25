FROM --platform=arm64 python:3.12-alpine

ARG USER_ID=10001
ARG USER_NAME=webapp

RUN addgroup -g ${USER_ID} ${USER_NAME} && \
    adduser -DH --uid ${USER_ID} -G ${USER_NAME} ${USER_NAME}

WORKDIR /app/

COPY requirements.txt /app/
RUN pip install -r /app/requirements.txt

COPY src/backend/ /app/

USER ${USER_NAME}

ENTRYPOINT [ "uvicorn", "main:app", "--host", "0.0.0.0", "--port", "5000", "--reload" ]
