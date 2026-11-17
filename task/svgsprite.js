const {src, dest} = require('gulp');

// Конфигурация
const path = require('../config/path.js');

// Плагины
const plumber = require('gulp-plumber');
const svgSprite = require('gulp-svg-sprite');
const cheerio = require('cheerio');
const {Transform} = require('node:stream');
const svgmin = require('gulp-svgmin');
const replace = require('gulp-replace');

// Обработка SVG
const svgsprite = () => {
  return src(path.svgsprite.src)
    .pipe(
      plumber({
        errorHandler: error => {
          console.error(`[SVG Sprite] ${error.message}`);
        },
      }),
    )
    .pipe(
      svgmin({
        js2svg: {
          pretty: true,
        },
      }),
    )
    .pipe(
      new Transform({
        objectMode: true,

        transform(file, encoding, callback) {
          if (file.isNull()) {
            return callback(null, file);
          }

          if (file.isStream()) {
            return callback(new Error('Streaming is not supported'));
          }

          try {
            const $ = cheerio.load(file.contents.toString(), {
              xmlMode: true,
            });

            $('style').remove();
            $('[class]').removeAttr('class');
            $('[fill]').removeAttr('fill');
            $('[stroke]').removeAttr('stroke');
            $('[style]').removeAttr('style');

            $('path, circle, ellipse, rect, polygon, polyline').attr(
              'fill',
              'currentColor',
            );

            file.contents = Buffer.from($.xml());

            callback(null, file);
          } catch (error) {
            callback(error);
          }
        },
      }),
    )
    .pipe(replace('&gt;', '>'))
    .pipe(
      svgSprite({
        mode: {
          // Режим symbol: использование спрайта через svg > use
          symbol: {
            sprite: 'sprite.svg',
          },
        },
      }),
    )
    .pipe(dest(path.svgsprite.dest));
};

module.exports = svgsprite;

// Старый вариант реализации оставлен в комментариях без изменений.
