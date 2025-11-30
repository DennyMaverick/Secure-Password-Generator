const copyElems = document.querySelectorAll('.password-generator__copy');
const copyPopup = document.querySelector('.password-generator__copy-popup');

copyElems.forEach(function (item) {
  item.addEventListener('click', function () {
    const currentCopyElem = this.closest('.password-generator__copy');

    const currentPasswordItem = currentCopyElem.closest(
      '.password-generator__password-item'
    );

    const currentInput = currentPasswordItem.querySelector(
      '.password-generator__password'
    );
      async function copyPassword() {
        try {
          await navigator.clipboard.writeText(currentInput.value);
        } catch (err) {
          console.error('Ошибка копирования в буфер: ', err);
        }
      }
      copyPassword();

    if (currentInput.value) {
      const currentCopyPopup = currentPasswordItem.querySelector(
        '.password-generator__copy-popup'
      );
      currentCopyPopup.classList.add('password-generator__copy-popup--active');
      setTimeout(() => {
        currentCopyPopup.classList.remove(
          'password-generator__copy-popup--active'
        );
      }, 2000);
    }
  });
});
