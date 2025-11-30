const closeModalBtn = document.querySelector('.password-generator__close-btn');
const passwordGeneratorPasswordsModal = document.querySelector(
  '.password-generator__passwords'
);

closeModalBtn.addEventListener('click', () => {
  passwordGeneratorPasswordsModal.classList.remove(
    'password-generator__passwords--active'
  );
});
