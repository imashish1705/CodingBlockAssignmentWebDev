const mix = require('laravel-mix');

mix.js('resources/app.js', 'public')
   .sass('resources/app.scss', 'public');
  