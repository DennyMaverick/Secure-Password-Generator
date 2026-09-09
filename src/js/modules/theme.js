const themeToggle = document.querySelector('#theme-toggle');
const themeSwitcher = document.querySelector('.theme-switch');
const listItems = document.querySelectorAll('.password-item__list-item');
let activeTheme = localStorage.getItem('theme');


const themes = {
  '.body': {
    theme: {
      light: 'body--light',
      dark: 'body--dark',
    },
  },
  '.password-generator__inner': {
    theme: {
      light: 'password-generator__inner--light',
      dark: 'password-generator__inner--dark',
    },
  },
  '.password-item__title': {
    theme: {
      light: 'password-item__title--light',
      dark: 'password-item__title--dark',
    },
  },
  '.password-item__list-item': {
    theme: {
      light: 'password-item__list-item--light',
      dark: 'password-item__list-item--dark',
    },
  },
  '.btn': {
    theme: {
      light: 'btn--light',
      dark: 'btn--dark',
    },
  },
  '.theme-switch__icon--sun': {
    theme: {
      light: 'theme-switch__icon--sun--light',
      dark: 'theme-switch__icon--sun--dark',
    },
  },
  '.password-item__custom-checkbox--specials': {
    theme: {
      light: 'password-item__custom-checkbox--specials--light',
      dark: 'password-item__custom-checkbox--specials--dark',
    },
  },
  '.password-item__list-item--active': {
    theme: {
      light: 'password-item__list-item--active--light',
      dark: 'password-item__list-item--active--dark',
    },
  },
  '.password-generator__passwords': {
    theme: {
      light: 'password-generator__passwords--light',
      dark: 'password-generator__passwords--dark',
    },
  },
  '.password-generator__password': {
    theme: {
      light: 'password-generator__password--light',
      dark: 'password-generator__password--dark',
    },
  },
  '.password-generator__copy': {
    theme: {
      light: 'password-generator__copy--light',
      dark: 'password-generator__copy--dark',
    },
  },
  '.lang-tool': {
    theme: {
      light: 'lang-tool--light',
      dark: 'lang-tool--dark',
    },
  },
  '.lang-tool__item--active': {
    theme: {
      light: 'lang-tool__item--active--light',
      dark: 'lang-tool__item--active--dark',
    },
  },
};

themeToggle.addEventListener('change', () => {
  themeSwitcher.classList.add('is-animating');

  setTimeout(() => {
    themeSwitcher.classList.remove('is-animating');
  }, 650);

  if (themeToggle.checked) {
    themeSwitch('light');
  } else {
    themeSwitch('dark');
  }

  // Сохраняем тему
  localStorage.setItem('theme', themeToggle.checked ? 'light' : 'dark');
  updateLocalStorageTheme();
  resetActiveListItem();
});
function themeSwitch(theme) {
  for (key in themes) {
    const elems = document.querySelectorAll(key);
    elems.forEach(elem => {
      if ((elem && themes[key].theme.light) || themes[key].theme.dark) {
        elem.classList.remove(
          `${themes[key].theme.dark}`,
          `${themes[key].theme.light}`,
        );

        if (theme === 'light') {
          elem.classList.add(`${themes[key].theme.light}`);
        } else {
          elem.classList.add(`${themes[key].theme.dark}`);
        }
      }
    });
  }
}

if (activeTheme === 'light') {
  themeToggle.checked = true;
} else if (activeTheme === 'dark') {
  themeToggle.checked = false;
}

if (activeTheme === '') {
  themeSwitch('light');
} else {
  themeSwitch(activeTheme);
}

// Checking when the system preferences are active

if (
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches &&
  activeTheme === ''
) {
  themeSwitch('dark');
}

// Changing theme when the System preferences change

window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', event => {
    const newColorScheme = event.matches ? 'dark' : 'light';

    if (newColorScheme === 'dark') {
      themeSwitch('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      themeSwitch('light');
      localStorage.setItem('theme', 'light');
    }
  });

function resetActiveListItem() {
  listItems.forEach(item => {
    item.classList.remove(
      'password-item__list-item--active--light',
      'password-item__list-item--active--dark',
    );
  });
}

function updateLocalStorageTheme() {
  activeTheme = localStorage.getItem('theme');
}
