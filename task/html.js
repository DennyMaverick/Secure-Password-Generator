const {src, dest} = require('gulp');

// Конфигурация
const path = require('../config/path.js');
const app = require('../config/app.js');

// Плагины
const plumber = require('gulp-plumber');
// const fileInclude = require("gulp-file-include")
const htmlmin = require('gulp-html-minifier-terser');
const strips = require('gulp-strip-comments');
// const size = require("gulp-size");
// const webpHtml = require("gulp-webp-html")

// Обработка HTML
const html = () => {
  return (
    src(path.html.src)
      .pipe(
        plumber({
          errorHandler: error => {
            console.error(`[HTML] ${error.message}`);
          },
        }),
      )
      // .pipe(
      //   fileInclude({
      //     prefix: "@@",
      //     basepath: "@file",
      //   })
      // )
      // .pipe(webpHtml())
      // .pipe(size({ title: "До сжатия" }))
      .pipe(htmlmin(app.htmlmin))
      .pipe(strips())
      // .pipe(size({ title: "После сжатия" }))
      .pipe(dest(path.html.dest))
  );
};

module.exports = html;
