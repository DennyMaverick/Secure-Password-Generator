const preloader = document.getElementById('preloader');
const bodyEl = document.querySelector('body');

window.onload = function () {
  if (preloader) {
    preloader.classList.add('done');
    bodyEl.classList.remove('no-scroll');
  }
};
