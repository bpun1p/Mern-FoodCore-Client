FROM node:13-alpine

ENV MONGO_DB_USERNAME=FoodCore \
    MONGO_DB_PWD=Guy123su

RUN mkdir -p /FoodCore

COPY . /FoodCore

WORKDIR /FoodCore/client

RUN npm install

WORKDIR /FoodCore/server

RUN npm install

ENTRYPOINT ["npm", "run", "dev"]
