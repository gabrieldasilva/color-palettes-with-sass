const mix = require('laravel-mix');

mix
    .sass('src/scss/sass-color-palettes/main.scss', 'dist/css/')
    .copyDirectory('src/views', 'dist/');