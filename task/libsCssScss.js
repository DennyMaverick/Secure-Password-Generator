const {src, dest} = require('gulp');

// Конфигурация
const path = require('../config/path.js');

// Плагины
const plumber = require('gulp-plumber');
const csso = require('gulp-csso');
const concat = require('gulp-concat');
const sass = require('gulp-sass')(require('sass'));

// Обработка SCSS
const libsCssScss = () => {
  return src(path.libsCssAndScss.src)
    .pipe(
      plumber({
        errorHandler: error => {
          console.error(`[SCSS] ${error.message}`);
        },
      }),
    )
    .pipe(sass())
    .pipe(csso())
    .pipe(concat('libs.min.css'))
    .pipe(dest(path.libsCssAndScss.dest));
};

module.exports = libsCssScss;
