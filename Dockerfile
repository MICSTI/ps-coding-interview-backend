FROM node:10-alpine
WORKDIR /usr/src/app

RUN npm i -g yarn

COPY . .
RUN yarn install

EXPOSE 3000
CMD [ "npm", "run", "start:prod" ]