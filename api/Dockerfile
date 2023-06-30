FROM node AS Production

ENV NODE_ENV=production

WORKDIR /usr/src/api

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3080

CMD ["npm", "start"]
