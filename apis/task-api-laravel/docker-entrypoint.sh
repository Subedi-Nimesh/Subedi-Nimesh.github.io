#!/bin/sh
set -e

cd /var/www

# Copy custom application code into Laravel scaffold
cp -r /custom/app/* ./app/
cp -r /custom/database/migrations/* ./database/migrations/
cp /custom/routes/api.php ./routes/api.php

# Apply environment from Render
if [ -n "$DATABASE_URL" ]; then
  echo "DATABASE_URL=$DATABASE_URL" >> .env
fi
if [ -n "$APP_URL" ]; then
  sed -i "s|APP_URL=.*|APP_URL=$APP_URL|" .env
fi
if [ -n "$APP_KEY" ]; then
  sed -i "s|APP_KEY=.*|APP_KEY=$APP_KEY|" .env
fi

php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider" --force 2>/dev/null || true
php artisan vendor:publish --provider="L5Swagger\L5SwaggerServiceProvider" --force 2>/dev/null || true

php artisan migrate --force
php artisan l5-swagger:generate 2>/dev/null || true

exec php artisan serve --host=0.0.0.0 --port=${PORT:-8000}
