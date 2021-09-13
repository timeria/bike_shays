window.addEventListener('DOMContentLoaded' , () => {

//Мобильное меню

const headerBlock = document.querySelector('.page-header');
const headerMenu = headerBlock.querySelector('.main-nav');
const buttonOpen = headerBlock.querySelector('.page-header__toggle');
const buttonClose = headerBlock.querySelector('.page-header__close');
const body = document.querySelector('.page-body');

buttonOpen.addEventListener('click', () => {
  headerBlock.classList.add('page-header--active');
  headerMenu.classList.add('main-nav--active');
});

buttonClose.addEventListener('click', () => {
  headerBlock.classList.remove('page-header--active');
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

});
