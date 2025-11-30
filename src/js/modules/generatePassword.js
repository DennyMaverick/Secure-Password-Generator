const passwordGeneratorBtn = document.querySelector('.password-generator__btn');
const listItems = document.querySelectorAll('.password-item__list-item');
const inputs = document.querySelectorAll('.password-generator__pass-item');
const resetBtn = document.querySelector('.password-generator__reset-btn');
const passwordPopup = document.querySelector('.password-generator__popup');
const passwordGeneratorInputs = document.querySelectorAll(
  '.password-generator__password'
);
const passwordDashBoard = document.querySelector(
  '.password-generator__passwords'
);

const specialCheckboxDefault = document.querySelector(
  '.password-item__default-checkbox--specials'
);

let symbolArray = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'g',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
];

const initialArrayLength = symbolArray.length;

let specialSymbolsArr = ['!', '@', '#', '$', '%', '^', '&', '*'];

const updateSymbols = function () {
  // Обновление массива, к основным символам прибавляются специальные
  if (symbolArray.length <= 36) {
    symbolArray = symbolArray.concat(specialSymbolsArr);
  }
};

const removeSpecialSymbols = function () {
  const specialSymArrLength = specialSymbolsArr.length;

  symbolArray.splice(initialArrayLength, specialSymArrLength);
};

const arrayDefaultCharacters = [];
const array8Characters = [];
const array12Characters = [];
const array15Characters = [];

let passwords = [];

const setArray = function (arr, numberOfCharacters) {
  // Обновление массива из нужных символов
  if (specialCheckboxDefault.checked) {
    updateSymbols();
  } else {
    removeSpecialSymbols();
  }
  for (let i = 0; i < numberOfCharacters; i++) {
    let randomIndex = Math.floor(Math.random() * symbolArray.length);
    arr[i] = symbolArray[randomIndex];
  }
  for (let i = 0; i < numberOfCharacters; i++) {
    let lettersInUpperCaseIndex = Math.floor(Math.random() * arr.length);
    if (typeof arr[lettersInUpperCaseIndex] === 'string') {
      arr[lettersInUpperCaseIndex] = arr[lettersInUpperCaseIndex].toUpperCase();
    }
  }
  passwords.push(arr.join(''));
};

const setArrayFewTimes = function (arr, numberOfCharacters, times) {
  for (let i = 0; i < times; i++) {
    if (passwords.length > inputs.length - 1) {
      break;
    }
    setArray(arr, numberOfCharacters);
  }
};

listItems.forEach(item => {
  item.addEventListener('click', function () {
    if (this.dataset.char === 'eight') {
      passwords = [];

      listItems.forEach(item => {
        item.classList.remove('password-item--active');
      });

      this.classList.add('password-item--active');
      setArrayFewTimes(array8Characters, 8, inputs.length);
    } else if (this.dataset.char === 'twelve') {
      passwords = [];

      listItems.forEach(item => {
        item.classList.remove('password-item--active');
      });

      this.classList.add('password-item--active');
      setArrayFewTimes(array12Characters, 12, inputs.length);
    } else if (this.dataset.char === 'fifteen') {
      passwords = [];

      listItems.forEach(item => {
        item.classList.remove('password-item--active');
      });

      this.classList.add('password-item--active');
      setArrayFewTimes(array15Characters, 15, inputs.length);
    }
  });
});

passwordGeneratorBtn.addEventListener('click', function () {
  for (let i = 0; i < inputs.length; i++) {
    if (passwords.length > 0) {
      // Активация input
      passwordGeneratorInputs.forEach(item => {
        item.classList.add('password-generator__password--active');
      });

      listItems.forEach(item => {
        if (item.classList.contains('password-item--active')) {
          let numOfSymbols = item.dataset.char;
          if (numOfSymbols === 'eight') {
            passwords = [];
            setArrayFewTimes(array8Characters, 8, inputs.length);
          } else if (numOfSymbols === 'twelve') {
            passwords = [];
            setArrayFewTimes(array12Characters, 12, inputs.length);
          } else if (numOfSymbols === 'fifteen') {
            passwords = [];
            setArrayFewTimes(array15Characters, 15, inputs.length);
          }
        }
      });

      inputs[i].value = passwords[i];

      // Открытие dashboard

      passwordDashBoard.classList.add('password-generator__passwords--active');
    } else {
      // Деактивация input
      passwordGeneratorInputs.forEach(item => {
        item.classList.remove('password-generator__password--active');
      });

      passwordPopup.classList.add('password-generator__popup--active');
      setTimeout(() => {
        passwordPopup.classList.remove('password-generator__popup--active');
      }, 2000);
    }
  }
});

resetBtn.addEventListener('click', function () {
  passwords = [];
  inputs.forEach(item => {
    item.value = '';
  });

  listItems.forEach(item => {
    item.classList.remove('password-item--active');
  });

  // Деактивация input
  passwordGeneratorInputs.forEach(item => {
    item.classList.remove('password-generator__password--active');
  });

  passwordDashBoard.classList.remove('password-generator__passwords--active');
});
