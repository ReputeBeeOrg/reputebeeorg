FROM node:current-alpine AS runtime
WORKDIR /app

COPY ./package.json /app

RUN npm install &&  npm install --arch=x64 --platform=linuxmusl --ignore-scripts=false --foreground-scripts --verbose  sharp && npm cache clean --force 

ENV PATH ./node_modules/.bin/:$PATH
