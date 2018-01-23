FROM node:alpine

EXPOSE 8080

WORKDIR /opt/src

RUN yarn global add serve

COPY .babelrc .
COPY package.json .
COPY yarn.lock .

COPY src/ src/ 
COPY config/ config/
COPY webpack.client.js .
COPY webpack.server.js .

RUN yarn install --ignore-engines

ENV NODE_ENV=production

RUN yarn build

CMD ["yarn", "start:prod"]
