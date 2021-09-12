window.addEventListener('DOMContentLoaded' , () => {

//Мобильное меню

  const headerBlock = document.querySelector('.page-header');
  const headerMenu = headerBlock.querySelector('.main-nav');
  const buttonOpen = headerBlock.querySelector('.page-header__toggle');
  const buttonClose = headerBlock.querySelector('.page-header__close');
  const body = document.querySelector('.page-body');

  headerBlock.classList.add('page-header--active');

  buttonOpen.addEventListener('click', () => {
    headerMenu.classList.add('main-nav--active');
  });

  buttonClose.addEventListener('click', () => {
    headerMenu.classList.remove('main-nav--active');
  });

//Плавная прокрутка по якорю

const anchors = headerMenu.querySelectorAll('.site-list__link')

for (let anchor of anchors) {
  anchor.addEventListener('click', (e) => {
    e.preventDefault()

    const blockID = anchor.getAttribute('href')

    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

//Форма

  const form = document.querySelector('.main-form');
  const userName = form.querySelector("[name='user_name']");
  const userPhone = form.querySelector("[name='user_phone']");
  const formButton = form.querySelector(".main-form__button");

  let isStorageSupport = true;
  const storageNameStart = "";


  try {
  storageNameStart = localStorage.getItem("userName");
} catch (err) {
  isStorageSupport = false;
}

if (storageNameStart) {
  userName.value = storageNameStart;
  userName.focus();
} else {
  userName.focus();
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let data = true;
  let statusMessage = document.createElement('div');
  statusMessage.classList.add("error-message");
  statusMessage.innerHTML = 'Можно ввести только цифры';

  if (!/^[0-9]+$/.test(userPhone.value) ) {
    form.insertBefore(statusMessage, formButton);
    data = false;
  }else {
    statusMessage.remove();
    data = true;
  }

  if (data == true) {
    form.submit();
    if(isStorageSupport) {
      localStorage.setItem("userName", userName.value);
      localStorage.setItem("userPhone", userPhone.value);
    }
  }
});


//Табы

/*const tabsItem = document.querySelectorAll('.main-tabs__item'),
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
  }*/

});
