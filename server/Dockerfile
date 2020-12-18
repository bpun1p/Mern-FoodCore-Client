FROM node:13-alpine

ENV MONGO_DB_USERNAME=FoodCore \
    MONGO_DB_PWD=Guy123su

RUN mkdir -p /home/server

COPY . /home/server

WORKDIR /home/server

RUN npm install

CMD ["node", "server.js"]
