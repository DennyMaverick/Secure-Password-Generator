const {rm} = require('node:fs/promises');

// Конфигурация
const path = require('../config/path.js');

// Удаление директории
const clear = () => {
  return rm(path.root, {
    recursive: true,
    force: true,
  });
};

module.exports = clear;
