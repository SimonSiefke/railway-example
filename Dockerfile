FROM node:15-alpine

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm ci --prod

COPY src ./src

CMD [ "node", "src/server.js" ]
