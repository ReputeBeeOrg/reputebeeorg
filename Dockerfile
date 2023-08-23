FROM node:lts AS runtime
WORKDIR /app

COPY ./package.json /app

RUN npm install && npm cache clean --force

ENV PATH ./node_modules/.bin/:$PATH
