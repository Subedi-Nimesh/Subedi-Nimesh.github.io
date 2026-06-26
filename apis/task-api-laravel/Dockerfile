FROM composer:2 AS laravel-base

RUN composer create-project laravel/laravel /var/www --prefer-dist --no-interaction

WORKDIR /var/www

RUN composer require laravel/sanctum darkaonline/l5-swagger --no-interaction \
    && php artisan install:api --no-interaction

FROM php:8.3-cli-alpine

RUN apk add --no-cache git unzip libzip-dev postgresql-dev oniguruma-dev \
    && docker-php-ext-install pdo pdo_mysql pdo_pgsql zip mbstring pcntl

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer
COPY --from=laravel-base /var/www /var/www

WORKDIR /var/www

COPY app /custom/app
COPY database/migrations /custom/database/migrations
COPY routes/api.php /custom/routes/api.php
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

COPY .env.example .env

RUN php artisan key:generate --force

EXPOSE 8000

ENTRYPOINT ["/docker-entrypoint.sh"]
