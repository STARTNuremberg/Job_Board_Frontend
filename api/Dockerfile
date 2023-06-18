FROM node AS Production

ENV NODE_ENV=production

WORKDIR /usr/src/api

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build

CMD ["sh", "-c", "npm run <Backend_Command>"]