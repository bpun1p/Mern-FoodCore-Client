FROM node:latest

RUN mkdir -p /FoodCore

COPY . /FoodCore

WORKDIR /FoodCore/client

RUN npm install

RUN npm start

WORKDIR /FoodCore/server

RUN npm install

EXPOSE 3000 5000

CMD ["node", "server.js"]