window.addEventListener('DOMContentLoaded' , () => {

//Табы

const tabsItem = document.querySelectorAll('.main-tabs__item'),
tabsContent = document.querySelectorAll('.main-tabs__block'),
tabsParent = document.querySelector('.main-tabs__list');

function hideTabContent() {
  tabsContent.forEach(item => {
    item.classList.remove('main-tabs__block--active');
  });

  tabsItem.forEach(item => {
    item.classList.remove('main-tabs__item--active');
  })
}

function showTabContent(i = 0) {
  tabsContent[i].classList.add('main-tabs__block--active');
  tabsItem[i].classList.add('main-tabs__item--active');
}

hideTabContent();
showTabContent();

tabsParent.addEventListener('click', (event) => {
  const target = event.target;
  if(target && target.classList.contains('main-tabs__item')) {
    tabsItem.forEach((item, i) => {
      if(target == item) {
        hideTabContent(i);
        showTabContent(i);
      }
    })
  }
});

  // Форма
  const reviewsButton = document.querySelector('.reviews__button'),
  pricesButton = document.querySelectorAll('.prices__button'),
  popupOverlay = document.querySelector('.page-overlay'),
  popupForm = document.querySelector('.page-popup'),
  closeForm = document.querySelector('.page-popup__close'),
  closeSuccess = document.querySelector('.main-message__close'),
  formPopup = document.querySelector('.page-popup__form'),
  formPhone = formPopup.querySelector('.main-form__input--tel'),
  formMail = formPopup.querySelector('.main-form__input--mail'),
  formContent = document.querySelector('.form__content'),
  formPhoneContent = formContent.querySelector('.main-form__input--tel'),
  formMailContent = formContent.querySelector('.main-form__input--mail'),
  formSuccess = document.querySelector('.main-message');

  const onPopupOpen = () => {
    popupForm.style.display = 'flex';
    popupOverlay.style.display = 'block';
    formPhone.focus();
  }
  const onPopupClose = () => {
    popupForm.style.display = 'none';
    popupOverlay.style.display = 'none';
    popupForm.style.display = 'none';
  }

  const onSuccessClose = () => {
    formSuccess.style.display = 'none';
  }

  reviewsButton.addEventListener('click', onPopupOpen);

  pricesButton.forEach(item => {
    item.addEventListener('click', onPopupOpen);
  });

  closeSuccess.addEventListener('click', onSuccessClose);

  closeForm.addEventListener('click', onPopupClose);

  popupOverlay.addEventListener('click', onPopupClose);
  document.removeEventListener('click', onPopupClose);

  const onPopupKeyup = (e) => {
    if (e.keyCode === 27) {
      onPopupClose();
      document.removeEventListener('click', onPopupClose);
    }
  };

  document.addEventListener('keyup', onPopupKeyup);

  //Проверка формы
  const storageDateStart = "";

  let isStorageSupport = true;

  try {
    storagePhone = localStorage.getItem('formPhone');
  } catch (err) {
    isStorageSupport = false;
  }

  if (storagePhone) {
    formPhone.value = storagePhone;
    formPhone.focus();
  } else {
    formMail.focus();
  }

});
