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

  //Мобильное меню

  const headerBlock = document.querySelector('.page-header');
  const headerMenu = headerBlock.querySelector('.main-nav');
  const buttonOpen = headerBlock.querySelector('.page-header__toggle');
  const buttonClose = headerBlock.querySelector('.page-header__close');
  const body = document.querySelector('.page-body');

  if(headerMenu) {
    headerMenu.classList.remove('main-nav--active');
  }

  if(buttonOpen) {
    buttonOpen.addEventListener('click', (event) => {
      headerBlock.classList.add('page-header--active');
      headerMenu.classList.add('main-nav--active');
      body.classList.add('page-body--active');
    });
  }

  if(buttonClose) {
    buttonClose.addEventListener('click', () => {
      headerBlock.classList.remove('page-header--active');
      headerMenu.classList.remove('main-nav--active');
      body.classList.remove('.page-body--active');
    });
  }

  //Плавная прокрутка по якорю

  if('.site-list__link') {
    const anchors = document.querySelectorAll('.site-list__link')

    for (let anchor of anchors) {
      anchor.addEventListener('click', (e) => {
        e.preventDefault()

        if(body.classList.contains('page-body--active')) {
          body.classList.remove('page-body--active');
          headerBlock.classList.remove('page-header--active');
          headerMenu.classList.remove('main-nav--active');
        };

        const blockID = anchor.getAttribute('href')

        document.querySelector(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      })
    }
  }


  //Форма

  const form = document.querySelector('form');
  if(form) {
    const userName = form.querySelector('#user_name');
    const userPhone = form.querySelector('#user_phone');
    const formButton = form.querySelector('.form__button');

    let isStorageSupport = true;

    try {
      storageNameStart = localStorage.getItem('userName');
      storagePhoneStart = localStorage.getItem('userPhone');
    } catch (err) {
      isStorageSupport = false;
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
