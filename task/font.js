const {src, dest} = require('gulp');
const {Transform} = require('stream');
const path = require('../config/path.js');
const plumber = require('gulp-plumber');
const ttf2woff2 = require('@0x6b/ttf2woff2-wasm');

const font = () => {
  const convertFont = new Transform({
    objectMode: true,

    transform(file, encoding, callback) {
      if (file.isBuffer()) {
        try {
          file.contents = ttf2woff2(file.contents);
          file.extname = '.woff2';
          callback(null, file);
        } catch (error) {
          callback(error);
        }
      } else {
        callback(null, file);
      }
    },
  });

  return src(path.font.src, {
    encoding: false,
    removeBOM: false,
  })
    .pipe(
      plumber({
        errorHandler: error => {
          console.error(`[Font] ${error.message}`);
        },
      }),
    )
    .pipe(convertFont)
    .pipe(dest(path.font.dest));
};

module.exports = font;
