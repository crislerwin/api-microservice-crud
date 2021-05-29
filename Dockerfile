FROM node:14.17.0-alpine3.10

RUN apk add --no-cache bash

RUN npm i -g @nestjs/cli@7.6.0

USER node

WORKDIR /home/node/app