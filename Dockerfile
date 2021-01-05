FROM node:latest

RUN mkdir -p /FoodCore

COPY . /FoodCore

WORKDIR /FoodCore/client

RUN npm install

WORKDIR /FoodCore/server

RUN npm install

EXPOSE 3000 5000

ENTRYPOINT [ "npm", "run", "dev" ]