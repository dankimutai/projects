'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// console.log(document.documentElement);
// const allselection = document.querySelectorAll('section');
// console.log(allselection);

// const header = document.querySelector('.header');

// const message = document.createElement('div')
// message.innerHTML="API stands for application programming interface"
// message.classList.add('cookie-message');
// header.prepend(message);
const navlinks = document.querySelectorAll('.nav__link');

navlinks.forEach(e => {
  e.addEventListener('click', function (nav) {
    nav.preventDefault();
    const attribute = nav.target.getAttribute('href');

    const section = document.querySelector(attribute);
    console.log(attribute);
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

const randNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
randNum(1, 255);
const randColor = `rgb(${randNum(1, 255)},${randNum(1, 255)},${randNum(
  1,
  255
)})`;
console.log(randColor);

const tabs = document.querySelectorAll('.operations__tab');
const operation = document.querySelector('.operations__tab-container');
const opeContent = document.querySelectorAll('.operations__content ');
operation.addEventListener('click', function (e) {
  const target = e.target.closest('.operations__tab');
  if (!target) return;

  opeContent.forEach(c => c.classList.remove('operations__content--active'));
  tabs.forEach(c => c.classList.remove('operations__tab--active'));
  target.classList.add('operations__tab--active');
  const tag = target.dataset.tab;
  
  document
    .querySelector(`.operations__content--${tag}`)
    .classList.add('operations__content--active');
});
