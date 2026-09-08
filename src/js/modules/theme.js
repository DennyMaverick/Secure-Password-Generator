const themeToggle = document.querySelector('#theme-toggle');
const themeSwitcher = document.querySelector('.theme-switch');

const themes = {
  '.body': {
    theme: {
      light: 'body--light',
      dark: 'body--dark',
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

const activeTheme = localStorage.getItem('theme');

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
