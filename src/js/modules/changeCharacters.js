const listItems = document.querySelectorAll('.password-item__list-item');
let activeTheme = localStorage.getItem('theme');

function resetActiveListItem() {
  listItems.forEach(item => {
    item.classList.remove(
      'password-item--active',
      'password-item__list-item--active',
      'password-item__list-item--active--light',
      'password-item__list-item--active--dark',
    );
  });
}

function updateLocalStorageTheme() {
  activeTheme = localStorage.getItem('theme');
}

const changeCharacters = function () {
  listItems.forEach(item => {
    item.addEventListener('click', function () {
      resetActiveListItem();
      updateLocalStorageTheme();
      if (activeTheme === 'light') {
        this.classList.add(
          'password-item__list-item--active--light',
          'password-item--active',
        );
      } else {
        this.classList.add(
          'password-item__list-item--active--dark',
          'password-item--active',
        );
      }
      if (activeTheme === '') {
        this.classList.add(
          'password-item__list-item--active--light',
          'password-item--active',
        );
      }
    });
  });
};

changeCharacters();
