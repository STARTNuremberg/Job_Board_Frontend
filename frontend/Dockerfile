FROM node:lts-alpine AS frontend

ENV NODE_ENV=development

WORKDIR /usr/src/frontend

COPY package.json yarn.lock ./

RUN --mount=type=cache,target=/root/.yarn \
    YARN_CACHE_FOLDER=/root/.yarn yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "run", "dev"]