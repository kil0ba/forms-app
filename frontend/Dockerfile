FROM node:14.5.0-alpine3.12 as builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

#RUN npm install -g serve

FROM nginx:alpine

#!/bin/sh

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy from the stahg 1
COPY --from=builder /usr/src/app/build /usr/share/nginx/html

EXPOSE 3000 3000

ENTRYPOINT ["nginx", "-g", "daemon off;"]
