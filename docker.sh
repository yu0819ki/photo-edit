#!/bin/sh

./composer.phar install

echo "start."
nc -l -p 9000 -w 0&
echo "artisan."
php artisan serve --host 0.0.0.0
