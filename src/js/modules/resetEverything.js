const listItems = document.querySelectorAll('.password-item__list-item');

const resetBtn = document.querySelector('.password-generator__reset-btn');

const defaultCheckboxSpecial = document.querySelector('#special');

const customCheckboxSpecial = document.querySelector(
  '.custom-checkbox--specials'
);

const labelSpecial = document.querySelector('.password-item__label-special');

const resetEverything = function () {
  // Сброс выбора количества символов
  listItems.forEach(item => {
    item.classList.remove('password-item__list-item--active');
  });

  // Сброс выбора специальные символы
  defaultCheckboxSpecial.checked = false;
};

// Переключение кастомного чекбокса в поле 'специальные символы'
customCheckboxSpecial.addEventListener('click', function () {
  if (defaultCheckboxSpecial.checked) {
    defaultCheckboxSpecial.checked = false;
  } else {
    defaultCheckboxSpecial.checked = true;
  }
});

resetBtn.addEventListener('click', resetEverything);