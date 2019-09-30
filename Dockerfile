FROM php:7.3-alpine
WORKDIR /var/www/html
RUN apk add nodejs npm
CMD ./composer.phar run dev
