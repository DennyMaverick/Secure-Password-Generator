document.addEventListener('DOMContentLoaded', () => {
  const privacyPolicyLink = document.querySelector('.footer__privacy-policy');

  if (!privacyPolicyLink) return;

  const targetPrivacyPolicyLinkUrl =
    window.location.hash === '#en'
      ? privacyPolicyLink.dataset.en
      : privacyPolicyLink.dataset.ru;

  privacyPolicyLink.href = targetPrivacyPolicyLinkUrl;
});
