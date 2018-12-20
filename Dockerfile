FROM node:alpine

EXPOSE 8080

WORKDIR /opt/src


COPY .babelrc .
COPY package.json .
COPY package-lock.json .

COPY src/ src/ 
COPY config/ config/
COPY webpack.client.js .
COPY webpack.server.js .

RUN npm install --ignore-engines 

ENV NODE_ENV=production

RUN npm run build 

CMD ["node", "build/bundle.js"]
