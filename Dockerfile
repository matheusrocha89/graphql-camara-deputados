FROM node:10.14-alpine

RUN mkdir /src

WORKDIR /src

COPY . .

RUN yarn

RUN yarn build

CMD ["yarn", "start"]
