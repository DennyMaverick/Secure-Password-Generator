const listItems = document.querySelectorAll('.password-item__list-item');

const changeCharacters = function () {
  listItems.forEach(item => {
    item.addEventListener('click', function () {
      listItems.forEach(item => {
        item.classList.remove('password-item__list-item--active');
      });
      this.classList.add('password-item__list-item--active');
    });
  });
};

changeCharacters();
