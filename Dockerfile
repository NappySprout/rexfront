FROM node:lts-alpine3.17 AS build

WORKDIR /app
COPY . .
RUN yarn
RUN yarn build

FROM node:lts-alpine3.17 AS deploy-node

WORKDIR /app
RUN rm -rf ./*
COPY --from=build /app/package.json .
COPY --from=build /app/build .
RUN yarn --prod
ENTRYPOINT [ "node", "index.js"]