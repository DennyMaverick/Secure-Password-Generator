const { src, dest } = require("gulp");

// Конфигурация
const path = require("../config/path.js");
const app = require("../config/app.js");

// Плагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
// const favicons = require('gulp-favicons');
// const filter = require('gulp-filter');


// Favicon
const favicon = () => {
  return src(path.favicon.src)
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: 'Favicon',
        message: error.message
      }))
    }))
    .pipe(dest(path.favicon.dest))
}

module.exports = favicon;