/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_copyValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/copyValue */ \"./src/js/modules/copyValue.js\");\n/* harmony import */ var _modules_copyValue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_copyValue__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_generatePassword__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/generatePassword */ \"./src/js/modules/generatePassword.js\");\n/* harmony import */ var _modules_generatePassword__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_generatePassword__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules_resetEverything__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/resetEverything */ \"./src/js/modules/resetEverything.js\");\n/* harmony import */ var _modules_resetEverything__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_resetEverything__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _modules_changeCharacters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/changeCharacters */ \"./src/js/modules/changeCharacters.js\");\n/* harmony import */ var _modules_changeCharacters__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_changeCharacters__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _modules_main_script__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/main-script */ \"./src/js/modules/main-script.js\");\n/* harmony import */ var _modules_main_script__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_main_script__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _modules_closeModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/closeModal */ \"./src/js/modules/closeModal.js\");\n/* harmony import */ var _modules_closeModal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_closeModal__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _modules_lang__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/lang */ \"./src/js/modules/lang.js\");\n/* harmony import */ var _modules_lang__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_lang__WEBPACK_IMPORTED_MODULE_6__);\n// import './modules/theme';\n// import './modules/lang';\n// import './modules/aos';\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/main.js?\n}");

/***/ }),

/***/ "./src/js/modules/changeCharacters.js":
/*!********************************************!*\
  !*** ./src/js/modules/changeCharacters.js ***!
  \********************************************/
/***/ (function() {

eval("{const listItems = document.querySelectorAll('.password-item__list-item');\n\nconst changeCharacters = function () {\n  listItems.forEach(item => {\n    item.addEventListener('click', function () {\n      listItems.forEach(item => {\n        item.classList.remove('password-item__list-item--active');\n      });\n      this.classList.add('password-item__list-item--active');\n    });\n  });\n};\n\nchangeCharacters();\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/modules/changeCharacters.js?\n}");

/***/ }),

/***/ "./src/js/modules/closeModal.js":
/*!**************************************!*\
  !*** ./src/js/modules/closeModal.js ***!
  \**************************************/
/***/ (function() {

eval("{const closeModalBtn = document.querySelector('.password-generator__close-btn');\nconst passwordGeneratorPasswordsModal = document.querySelector(\n  '.password-generator__passwords'\n);\n\ncloseModalBtn.addEventListener('click', () => {\n  passwordGeneratorPasswordsModal.classList.remove(\n    'password-generator__passwords--active'\n  );\n});\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/modules/closeModal.js?\n}");

/***/ }),

/***/ "./src/js/modules/copyValue.js":
/*!*************************************!*\
  !*** ./src/js/modules/copyValue.js ***!
  \*************************************/
/***/ (function() {

eval("{const copyElems = document.querySelectorAll('.password-generator__copy');\nconst copyPopup = document.querySelector('.password-generator__copy-popup');\n\ncopyElems.forEach(function (item) {\n  item.addEventListener('click', function () {\n    const currentCopyElem = this.closest('.password-generator__copy');\n\n    const currentPasswordItem = currentCopyElem.closest(\n      '.password-generator__password-item'\n    );\n\n    const currentInput = currentPasswordItem.querySelector(\n      '.password-generator__password'\n    );\n      async function copyPassword() {\n        try {\n          await navigator.clipboard.writeText(currentInput.value);\n        } catch (err) {\n          console.error('Ошибка копирования в буфер: ', err);\n        }\n      }\n      copyPassword();\n\n    if (currentInput.value) {\n      const currentCopyPopup = currentPasswordItem.querySelector(\n        '.password-generator__copy-popup'\n      );\n      currentCopyPopup.classList.add('password-generator__copy-popup--active');\n      setTimeout(() => {\n        currentCopyPopup.classList.remove(\n          'password-generator__copy-popup--active'\n        );\n      }, 2000);\n    }\n  });\n});\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/modules/copyValue.js?\n}");

/***/ }),

/***/ "./src/js/modules/generatePassword.js":
/*!********************************************!*\
  !*** ./src/js/modules/generatePassword.js ***!
  \********************************************/
/***/ (function() {

eval("{const passwordGeneratorBtn = document.querySelector('.password-generator__btn');\nconst listItems = document.querySelectorAll('.password-item__list-item');\nconst inputs = document.querySelectorAll('.password-generator__pass-item');\nconst resetBtn = document.querySelector('.password-generator__reset-btn');\nconst passwordPopup = document.querySelector('.password-generator__popup');\nconst passwordGeneratorInputs = document.querySelectorAll(\n  '.password-generator__password'\n);\nconst passwordDashBoard = document.querySelector(\n  '.password-generator__passwords'\n);\n\nconst specialCheckboxDefault = document.querySelector(\n  '.password-item__default-checkbox--specials'\n);\n\nlet symbolArray = [\n  'a',\n  'b',\n  'c',\n  'd',\n  'e',\n  'f',\n  'g',\n  'h',\n  'i',\n  'g',\n  'k',\n  'l',\n  'm',\n  'n',\n  'o',\n  'p',\n  'q',\n  'r',\n  's',\n  't',\n  'u',\n  'v',\n  'w',\n  'x',\n  'y',\n  'z',\n  0,\n  1,\n  2,\n  3,\n  4,\n  5,\n  6,\n  7,\n  8,\n  9,\n];\n\nconst initialArrayLength = symbolArray.length;\n\nlet specialSymbolsArr = ['!', '@', '#', '$', '%', '^', '&', '*'];\n\nconst updateSymbols = function () {\n  // Обновление массива, к основным символам прибавляются специальные\n  if (symbolArray.length <= 36) {\n    symbolArray = symbolArray.concat(specialSymbolsArr);\n  }\n};\n\nconst removeSpecialSymbols = function () {\n  const specialSymArrLength = specialSymbolsArr.length;\n\n  symbolArray.splice(initialArrayLength, specialSymArrLength);\n};\n\nconst arrayDefaultCharacters = [];\nconst array8Characters = [];\nconst array12Characters = [];\nconst array15Characters = [];\n\nlet passwords = [];\n\nconst setArray = function (arr, numberOfCharacters) {\n  // Обновление массива из нужных символов\n  if (specialCheckboxDefault.checked) {\n    updateSymbols();\n  } else {\n    removeSpecialSymbols();\n  }\n  for (let i = 0; i < numberOfCharacters; i++) {\n    let randomIndex = Math.floor(Math.random() * symbolArray.length);\n    arr[i] = symbolArray[randomIndex];\n  }\n  for (let i = 0; i < numberOfCharacters; i++) {\n    let lettersInUpperCaseIndex = Math.floor(Math.random() * arr.length);\n    if (typeof arr[lettersInUpperCaseIndex] === 'string') {\n      arr[lettersInUpperCaseIndex] = arr[lettersInUpperCaseIndex].toUpperCase();\n    }\n  }\n  passwords.push(arr.join(''));\n};\n\nconst setArrayFewTimes = function (arr, numberOfCharacters, times) {\n  for (let i = 0; i < times; i++) {\n    if (passwords.length > inputs.length - 1) {\n      break;\n    }\n    setArray(arr, numberOfCharacters);\n  }\n};\n\nlistItems.forEach(item => {\n  item.addEventListener('click', function () {\n    if (this.dataset.char === 'eight') {\n      passwords = [];\n\n      listItems.forEach(item => {\n        item.classList.remove('password-item--active');\n      });\n\n      this.classList.add('password-item--active');\n      setArrayFewTimes(array8Characters, 8, inputs.length);\n    } else if (this.dataset.char === 'twelve') {\n      passwords = [];\n\n      listItems.forEach(item => {\n        item.classList.remove('password-item--active');\n      });\n\n      this.classList.add('password-item--active');\n      setArrayFewTimes(array12Characters, 12, inputs.length);\n    } else if (this.dataset.char === 'fifteen') {\n      passwords = [];\n\n      listItems.forEach(item => {\n        item.classList.remove('password-item--active');\n      });\n\n      this.classList.add('password-item--active');\n      setArrayFewTimes(array15Characters, 15, inputs.length);\n    }\n  });\n});\n\npasswordGeneratorBtn.addEventListener('click', function () {\n  for (let i = 0; i < inputs.length; i++) {\n    if (passwords.length > 0) {\n      // Активация input\n      passwordGeneratorInputs.forEach(item => {\n        item.classList.add('password-generator__password--active');\n      });\n\n      listItems.forEach(item => {\n        if (item.classList.contains('password-item--active')) {\n          let numOfSymbols = item.dataset.char;\n          if (numOfSymbols === 'eight') {\n            passwords = [];\n            setArrayFewTimes(array8Characters, 8, inputs.length);\n          } else if (numOfSymbols === 'twelve') {\n            passwords = [];\n            setArrayFewTimes(array12Characters, 12, inputs.length);\n          } else if (numOfSymbols === 'fifteen') {\n            passwords = [];\n            setArrayFewTimes(array15Characters, 15, inputs.length);\n          }\n        }\n      });\n\n      inputs[i].value = passwords[i];\n\n      // Открытие dashboard\n\n      passwordDashBoard.classList.add('password-generator__passwords--active');\n    } else {\n      // Деактивация input\n      passwordGeneratorInputs.forEach(item => {\n        item.classList.remove('password-generator__password--active');\n      });\n\n      passwordPopup.classList.add('password-generator__popup--active');\n      setTimeout(() => {\n        passwordPopup.classList.remove('password-generator__popup--active');\n      }, 2000);\n    }\n  }\n});\n\nresetBtn.addEventListener('click', function () {\n  passwords = [];\n  inputs.forEach(item => {\n    item.value = '';\n  });\n\n  listItems.forEach(item => {\n    item.classList.remove('password-item--active');\n  });\n\n  // Деактивация input\n  passwordGeneratorInputs.forEach(item => {\n    item.classList.remove('password-generator__password--active');\n  });\n\n  passwordDashBoard.classList.remove('password-generator__passwords--active');\n});\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/modules/generatePassword.js?\n}");

/***/ }),

/***/ "./src/js/modules/lang.js":
/*!********************************!*\
  !*** ./src/js/modules/lang.js ***!
  \********************************/
/***/ (function() {

eval("{//* =========== Объект с переводом страницы ==============\n\nconst langs = {\n  'password-generator__title': {\n    ru: 'Генератор паролей',\n    en: 'Password Generator',\n  },\n  'password-generator__numbers': {\n    ru: 'Выберите количество символов',\n    en: 'Choose the number of characters:',\n  },\n  'special-symbols': {\n    ru: 'Специальные символы',\n    en: 'Special symbols',\n  },\n  'generate-btn': {\n    ru: 'Сгенерировать',\n    en: 'Generate',\n  },\n  reset: {\n    ru: 'Сбросить',\n    en: 'Reset',\n  },\n  'your-passwords-title': {\n    ru: 'Ваши Пароли:',\n    en: 'Your Passwords:',\n  },\n};\n\nconst titles = {\n  // \"telegram-intro\": {\n  //   ru: \"Мой телеграм\",\n  //   en: \"My telegram\",\n  // },\n};\n\n// const repeatTitles = {\n//   'password-generator-symbols': {\n//     ru: 'символов',\n//     en: 'symbols',\n//   },\n// };\n\nconst repeatElems = {\n  'password-generator-symbols': {\n    ru: 'символов',\n    en: 'symbols',\n  },\n  'password-generator__numbers': {\n    ru: 'Выберите кол-во символов',\n    en: 'Choose the number of characters',\n  },\n  copied: {\n    ru: 'Cкопировано',\n    en: 'Copied',\n  },\n};\n\n// ====== Секция Search / placeholders\n\nconst placeholders = {\n  // name: {\n  //   ru: \"Напишите Ваше имя\",\n  //   en: \"Write your name\",\n  // },\n};\n\nconst toolbarItems = document.querySelectorAll('.lang-tool__item');\n\n// Массив всех доступных языков\nconst allLangs = ['ru', 'en'];\n\ntoolbarItems.forEach(function (item) {\n  item.addEventListener('click', function () {\n    // получение hash из строки браузера - #ru или #en\n\n    // получение значения атрибута data-lang (ru или en)\n    let lang = this.dataset.lang;\n\n    // добавление в строку браузера #ru или #en\n    location.href = window.location.pathname + '#' + lang;\n\n    // перезагрузка страницы\n    location.reload();\n  });\n});\nfunction changeLang() {\n  // получение hash из строки браузера - #ru или #en\n  let hash = window.location.hash;\n  // начало hash массива строки начинается со второго символа - ru или en\n  hash = hash.substring(1);\n\n  const langToolRuEl = document.querySelector('[data-lang=\"ru\"]');\n  const langToolEnEl = document.querySelector('[data-lang=\"en\"]');\n  // получение hash из строки браузера - #ru или #en\n\n  function toggleLangOnRU() {\n    if (!langToolRuEl.classList.contains('lang-tool__item--active')) {\n      langToolRuEl.classList.add('lang-tool__item--active');\n    }\n    langToolEnEl.classList.remove('lang-tool__item--active');\n  }\n\n  function toggleLangOnEN() {\n    if (!langToolEnEl.classList.contains('lang-tool__item--active')) {\n      langToolEnEl.classList.add('lang-tool__item--active');\n    }\n    langToolRuEl.classList.remove('lang-tool__item--active');\n  }\n  if (hash === 'ru') {\n    toggleLangOnRU();\n  } else if (hash === 'en') {\n    toggleLangOnEN();\n  }\n\n  // проверка - если массив из всех доступных языков не содержит hash\n  if (!allLangs.includes(hash)) {\n    // принудительно записывать в строку браузера путь с языком\n    location.href = window.location.pathname + '#ru';\n    // перезагрузка страницы\n    location.reload();\n  }\n\n  // перебор массива langs\n  for (let key in langs) {\n    // получение элементов в html, которые нужно перевести\n    let elem = document.querySelector('.lang-' + key);\n    // если элемент существует и язык для элемента прописан в объекте с переводом языков, то заменить содержание контента в элементе на тот контент, который взят из массива langs\n    if (elem && langs[key][hash]) {\n      elem.innerHTML = langs[key][hash];\n    }\n  }\n\n  //! перевод всплывающих текстовых подсказок при наводе на ссылки\n  // for (let key in titles) {\n  //   let elem = document.querySelector(\".lang-\" + key)\n  //   if (elem && titles[key][hash]) {\n  //     elem.title = titles[key][hash]\n  //   }\n  // }\n\n  //! перевод всплывающих текстовых подсказок при наводе на ссылки / повторяющиеся элементы\n  // for (let key in repeatTitles) {\n  //   let elems = document.querySelectorAll(\".lang-\" + key)\n  //   elems.forEach(function (elem) {\n  //     if (elem && repeatTitles[key][hash]) {\n  //       elem.title = repeatTitles[key][hash]\n  //     }\n  //   })\n  // }\n  //! Для плейсхолдеров\n  // for (let key in placeholders) {\n  //   let elemPlaceholder = document.querySelector(\".lang-placeholder-\" + key)\n  //   if (elemPlaceholder && placeholders[key][hash]) {\n  //     elemPlaceholder.placeholder = placeholders[key][hash]\n  //   }\n  // }\n  //! Для повторяющихся элементов\n  for (let key in repeatElems) {\n    let elems = document.querySelectorAll('.lang-' + key);\n    elems.forEach(function (elem) {\n      if (elem && repeatElems[key][hash]) {\n        elem.innerHTML = repeatElems[key][hash];\n      }\n    });\n  }\n}\n// запуск функции changeLang()\nchangeLang();\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/modules/lang.js?\n}");

/***/ }),

/***/ "./src/js/modules/main-script.js":
/*!***************************************!*\
  !*** ./src/js/modules/main-script.js ***!
  \***************************************/
/***/ (function() {

eval("{//* ========== lazyload ==========\n\n// var lazyLoadInstance = new LazyLoad({\n//   elements_selector: \".lazy\",\n// })\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/modules/main-script.js?\n}");

/***/ }),

/***/ "./src/js/modules/resetEverything.js":
/*!*******************************************!*\
  !*** ./src/js/modules/resetEverything.js ***!
  \*******************************************/
/***/ (function() {

eval("{const listItems = document.querySelectorAll('.password-item__list-item');\n\nconst resetBtn = document.querySelector('.password-generator__reset-btn');\n\nconst defaultCheckboxSpecial = document.querySelector('#special');\n\nconst customCheckboxSpecial = document.querySelector(\n  '.custom-checkbox--specials'\n);\n\nconst labelSpecial = document.querySelector('.password-item__label-special');\n\nconst resetEverything = function () {\n  // Сброс выбора количества символов\n  listItems.forEach(item => {\n    item.classList.remove('password-item__list-item--active');\n  });\n\n  // Сброс выбора специальные символы\n  defaultCheckboxSpecial.checked = false;\n};\n\n// Переключение кастомного чекбокса в поле 'специальные символы'\ncustomCheckboxSpecial.addEventListener('click', function () {\n  if (defaultCheckboxSpecial.checked) {\n    defaultCheckboxSpecial.checked = false;\n  } else {\n    defaultCheckboxSpecial.checked = true;\n  }\n});\n\nresetBtn.addEventListener('click', resetEverything);\n\n//# sourceURL=webpack://gulp-starter/./src/js/modules/resetEverything.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;