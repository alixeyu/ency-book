FROM --platform=arm64 node:18-alpine


ARG USER_ID=10001
ARG USER_NAME=webapp


RUN addgroup -g ${USER_ID} ${USER_NAME} && \
    adduser -DH --uid ${USER_ID} -G ${USER_NAME} ${USER_NAME}

WORKDIR /app/

COPY src/frontend/package.json /app/
RUN (cd /app/ && npm install)

COPY src/frontend/ /app/

USER ${USER_NAME}

ENTRYPOINT [ "npm", "start", "run" ]
