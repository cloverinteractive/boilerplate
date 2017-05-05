FROM node:alpine

EXPOSE 8080
ENV NODE_ENV=production

WORKDIR /opt/src

RUN yarn global add serve

COPY .babelrc .
COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY client/ client/ 
COPY config/ config/
COPY server/ server/
COPY webpack.config.js .

RUN yarn build

CMD ["yarn", "start"]
