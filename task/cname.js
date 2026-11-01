const {src, dest} = require('gulp');

// Конфигурация
const path = require('../config/path.js');

// Копирование CNAME
const cname = () => {
  return src(path.cname.src).pipe(dest(path.cname.dest));
};

module.exports = cname;
