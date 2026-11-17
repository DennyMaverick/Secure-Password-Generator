const {src, dest} = require('gulp');

// Конфигурация
const path = require('../config/path.js');
const app = require('../config/app.js');

// Плагины
const plumber = require('gulp-plumber');

// Favicon
const favicon = () => {
  return src(path.favicon.src)
    .pipe(
      plumber({
        errorHandler: error => {
          console.error(`[Favicon] ${error.message}`);
        },
      }),
    )
    .pipe(dest(path.favicon.dest));
};

module.exports = favicon;
