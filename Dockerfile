FROM php:7.3-alpine
WORKDIR /var/www/html
RUN apk add nodejs npm git
COPY ./docker.sh ./
CMD sh ./docker.sh
EXPOSE 8000
