FROM node:latest

RUN mkdir -p /FoodCore/client

COPY . /FoodCore/client

WORKDIR /FoodCore/client

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]