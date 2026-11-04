const {src, dest} = require('gulp');

// Конфигурация
const path = require('../config/path.js');
const app = require('../config/app.js');

// Плагины
const plumber = require('gulp-plumber');
const babel = require('gulp-babel');
const webpack = require('webpack-stream');
const uglify = require('gulp-uglify');
const strips = require('gulp-strip-comments');

// Обработка JavaScript
const js = () => {
  return src(path.js.src, {sourcemaps: app.isDev})
    .pipe(
      plumber({
        errorHandler: error => {
          console.error(`[JavaScript] ${error.message}`);
        },
      }),
    )
    .pipe(babel())
    .pipe(strips())
    .pipe(uglify())
    .pipe(webpack(app.webpack))
    .pipe(dest(path.js.dest, {sourcemaps: app.isDev}));
};

module.exports = js;
