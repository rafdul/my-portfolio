'use strict';

const hamburger = document.querySelector('.menu__hamburger');
const headerMobile = document.querySelector('.headerMobile');
const navigationMobile = document.querySelector('.navigation-mobile');
const hamburgerItem = Array.from(document.querySelectorAll('.menu__hamburger-item'));

hamburger.addEventListener('click', () => {
  console.log('klik w hamburgera');

  if(headerMobile.classList.contains('menuActive')) {
    headerMobile.classList.remove('menuActive');
    navigationMobile.style.display = 'none';
    hamburger.classList.remove('changeHamburger');
    for(let el of hamburgerItem) {
      el.style.backgroundColor = '#000';
      el.style.transition = '0.3s';
    }
  } else {
    headerMobile.classList.add('menuActive');
    navigationMobile.style.display = 'block';
    hamburger.classList.add('changeHamburger');
    for(let el of hamburgerItem) {
      el.style.backgroundColor = '#f1f2f6';
    }
  }
});

navigationMobile.addEventListener('click', () => {
  console.log('klik w menu mobile');
  headerMobile.classList.remove('menuActive');
  navigationMobile.style.display = 'none';
  hamburger.classList.remove('changeHamburger');
  for(let el of hamburgerItem) {
    el.style.backgroundColor = '#000';
    el.style.transition = '0.3s';
  }
});