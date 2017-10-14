FROM node:alpine

EXPOSE 8080
ENV NODE_ENV=production
ENV BABEL_ENV=server

WORKDIR /opt/src

RUN yarn global add serve

COPY .babelrc .
COPY package.json .
COPY yarn.lock .

COPY src/ src/ 
COPY config/ config/
COPY webpack.config.js .

RUN yarn install --ignore-engines
RUN yarn build

CMD ["yarn", "start"]
