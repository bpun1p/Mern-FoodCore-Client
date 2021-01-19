FROM node:latest

RUN mkdir -p /MERN-FoodCore-Client

COPY . /MERN-FoodCore-Client

WORKDIR /MERN-FoodCore-Client/client

RUN npm install

EXPOSE 3000

ENTRYPOINT [ "npm", "start" ]