FROM node:10-alpine

WORKDIR /app

RUN npm i -g nodemon

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD [ "node", "index.js" ]
