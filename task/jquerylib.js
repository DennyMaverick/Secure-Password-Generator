const {src, dest} = require('gulp');

// Конфигурация
const path = require('../config/path.js');
const app = require('../config/app.js');

// Плагины
const plumber = require('gulp-plumber');
// const babel = require("gulp-babel");
const uglify = require('gulp-uglify');

// Обработка JavaScript
const jquerylib = () => {
  return (
    src(path.jquerylib.src)
      .pipe(
        plumber({
          errorHandler: error => {
            console.error(`[JavaScript] ${error.message}`);
          },
        }),
      )
      // .pipe(babel())
      .pipe(dest(path.jquerylib.dest))
  );
};

module.exports = jquerylib;
