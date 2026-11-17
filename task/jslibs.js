const {src, dest} = require('gulp');

// Конфигурация
const path = require('../config/path.js');

// Плагины
const plumber = require('gulp-plumber');
// const babel = require("gulp-babel");
const gulpConcat = require('gulp-concat');
const uglify = require('gulp-uglify');
const strips = require('gulp-strip-comments');

// Обработка JavaScript
const jslibs = () => {
  return (
    src(path.jslibs.src)
      .pipe(
        plumber({
          errorHandler: error => {
            console.error(`[JavaScript] ${error.message}`);
          },
        }),
      )
      // .pipe(babel())
      .pipe(strips())
      .pipe(uglify())
      .pipe(gulpConcat('libs.min.js'))
      .pipe(dest(path.jslibs.dest))
  );
};

module.exports = jslibs;
