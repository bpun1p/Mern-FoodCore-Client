FROM node

ENV MONGO_DB_USERNAME=FoodCore \
    MONGO_DB_PWD=Guy123su

RUN mkdir -p /server
RUN npm install

COPY . /server

CMD [ "node", "server/server.js" ]
