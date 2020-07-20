FROM node:alpine

USER 1000:1000

RUN mkdir -p /app

WORKDIR /app

COPY package.json .

RUN npm i --registry=https://registry.npm.taobao.org --unsafe-perm && npm cache --force clean