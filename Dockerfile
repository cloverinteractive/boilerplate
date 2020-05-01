FROM node:stretch

EXPOSE 8080

WORKDIR /opt/src


COPY .babelrc .
COPY package.json .
COPY package-lock.json .

COPY src/ src/ 
COPY config/ config/
COPY webpack.client.js .
COPY webpack.server.js .
COPY bsconfig.json .

RUN apt-get update
RUN apt-get install build-essential -y
RUN npm install --ignore-engines 

ENV NODE_ENV=production

RUN npm run build

CMD ["node", "build/bundle.js"]
