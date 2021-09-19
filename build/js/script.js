//Плавная прокрутка по якорю
const scrollAnchors = (elem) => {
  if(elem) {
    const anchors = document.querySelectorAll(elem)

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
  }
}

const phoneValidate = (elem) => {
  if(elem) {
    elem.addEventListener('input', () => {
      if(elem.value.match(/[A-Za-zА-Яа-яЁё]/) ) {
        elem.value = elem.value.replace(/[A-Za-zА-Яа-яЁё]/, '');
        elem.setCustomValidity('Поле не должно содержать буквы');
      } else {
        elem.setCustomValidity('');
      }

      elem.reportValidity();
    });
  }
}

window.addEventListener('DOMContentLoaded' , () => {

  scrollAnchors('.site-list__link');

  //Мобильное меню

  const headerBlock = document.querySelector('.page-header');
  const headerMenu = headerBlock.querySelector('.main-nav');
  const buttonOpen = headerBlock.querySelector('.page-header__toggle');
  const buttonClose = headerBlock.querySelector('.page-header__close');
  const body = document.querySelector('.page-body');


  if(buttonOpen) {
    buttonOpen.addEventListener('click', (event) => {
      headerBlock.classList.add('page-header--active');
      headerMenu.classList.add('main-nav--active');
    });
  }

  if(buttonClose) {
    buttonClose.addEventListener('click', () => {
      headerBlock.classList.remove('page-header--active');
      headerMenu.classList.remove('main-nav--active');
    });
  }

  //Форма

  const form = document.querySelector('form');
  if(form) {
    const userName = form.querySelector('#user_name');
    const userPhone = form.querySelector('#user_phone');
    const formButton = form.querySelector('.form__button');

    let isStorageSupport = true;
    const storageNameStart = '';
    const storagePhoneStart = '';


    try {
      storageNameStart = localStorage.getItem('userName');
      storagePhoneStart = localStorage.getItem('userPhone');
    } catch (err) {
      isStorageSupport = false;
    }

    if(userName){
      if (storageNameStart) {
        userName.value = storageNameStart;
        userName.focus();
      } else {
        userName.focus();
      }
    } else {
      if (storagePhoneStart) {
        userPhone.value = storagePhoneStart;
        userPhone.focus();
      } else {
        userPhone.focus();
      }
    }

    phoneValidate(userPhone);

    form.addEventListener('submit', function () {
      if(isStorageSupport) {
        localStorage.setItem('userName', userName.value);
        localStorage.setItem('userPhone', userPhone.value);
      }
    });

  }

});
