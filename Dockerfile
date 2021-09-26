FROM node:latest as build

WORKDIR  /home/app

COPY ./ /home/app/

RUN npm install

RUN npm run build

FROM nginx:latest

COPY --from=build /home/app/dist/machine-stream /usr/share/nginx/html
COPY nginx.conf  /etc/nginx/conf.d/default.conf

EXPOSE 80

