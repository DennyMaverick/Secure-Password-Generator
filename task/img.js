const {src, dest} = require('gulp');
const {Transform} = require('node:stream');

// Конфигурация
const path = require('../config/path.js');
const app = require('../config/app.js');

// Плагины
const plumber = require('gulp-plumber');

// Библиотеки обработки изображений
const sharp = require('sharp');

// Форматирование размера файла
const formatSize = bytes => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;

  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
};

// Вывод результата оптимизации
const logOptimization = (file, before, after) => {
  const difference = before - after;
  const percent =
    before > 0 ? ((Math.abs(difference) / before) * 100).toFixed(1) : '0.0';

  const status =
    difference > 0
      ? `-${percent}%`
      : difference < 0
        ? `+${percent}% (original kept)`
        : '0.0% (original kept)';

  console.log(
    `[Image] ${file.relative}: ${formatSize(before)} → ${formatSize(after)} (${status})`,
  );
};

// Оптимизация изображений
const optimizeImages = () => {
  return new Transform({
    objectMode: true,

    transform(file, encoding, callback) {
      const optimize = async () => {
        if (file.isNull()) return file;

        if (file.isStream()) {
          throw new Error('Streaming files are not supported');
        }

        const originalSize = file.contents.length;
        const extension = file.extname.toLowerCase();

        // GIF оставляем без изменений
        if (extension === '.gif') {
          console.log(`[Image] ${file.relative}: GIF skipped`);
          return file;
        }

        // Оптимизация SVG
        if (extension === '.svg') {
          const {optimize: optimizeSvg} = await import('svgo');

          const result = optimizeSvg(file.contents.toString('utf8'), {
            path: file.path,
            multipass: true,
            plugins: [
              {
                name: 'preset-default',
                params: {
                  overrides: {
                    removeDesc: false,
                  },
                },
              },
            ],
          });

          const optimized = Buffer.from(result.data);

          if (optimized.length < originalSize) {
            file.contents = optimized;
          }

          logOptimization(file, originalSize, file.contents.length);

          return file;
        }

        // Поддерживаемые растровые форматы
        const supportedFormats = ['.jpg', '.jpeg', '.png', '.webp', '.avif'];

        if (!supportedFormats.includes(extension)) return file;

        const image = sharp(file.contents);
        const metadata = await image.metadata();

        // Не изменяем многостраничные и анимированные изображения
        if (metadata.pages > 1) {
          console.log(`[Image] ${file.relative}: animated image skipped`);
          return file;
        }

        // Автоматическая коррекция ориентации по EXIF
        const pipeline = image.rotate();

        switch (extension) {
          case '.jpg':
          case '.jpeg':
            pipeline.jpeg({
              quality: 90,
              mozjpeg: true,
            });
            break;

          case '.png':
            pipeline.png({
              compressionLevel: 9,
              adaptiveFiltering: true,
            });
            break;

          case '.webp':
            pipeline.webp({
              quality: 85,
              effort: 5,
            });
            break;

          case '.avif':
            pipeline.avif({
              quality: 60,
              effort: 5,
            });
            break;
        }

        const optimized = await pipeline.toBuffer();

        if (optimized.length < originalSize) {
          file.contents = optimized;
        }

        logOptimization(file, originalSize, file.contents.length);

        return file;
      };

      optimize()
        .then(result => callback(null, result))
        .catch(callback);
    },
  });
};

// Обработка изображений
const img = () => {
  let stream = src(path.img.src, {encoding: false}).pipe(
    plumber({
      errorHandler: error => {
        console.error(`[Image] ${error.message}`);
      },
    }),
  );

  if (app.isProd) {
    stream = stream.pipe(optimizeImages());
  }

  return stream.pipe(dest(path.img.dest));
};

module.exports = img;
