'use strict';

//typing
const box = document.querySelector('.banner');
const text = [
  'Frontend Web Developer', 'Look at my work'
];
let wordIndex = 0;
let textIndex = 0;
let oldTime = 0;
const speed = 130; // czym większa wartość, tym wolniejszy typing
const stop = 1500; // zatrzymanie między kolejnymi tekstami
let activeDomElement = box;

const typing = (newTime) => {
  const letter = text[textIndex].substr(wordIndex,1);
    
  if(newTime - oldTime > speed) {
    if(wordIndex === text[textIndex].length) {
      if(textIndex === text.length-1) {
        console.log('koniec animacji');
        return;
      }
      return setTimeout(() =>{
        textIndex++;
        wordIndex = 0;
        requestAnimationFrame(typing);
      }, stop);
    } else if(wordIndex === 0) {
      const pMaker = document.createElement('p');
      box.appendChild(pMaker);
      activeDomElement = pMaker;
    } 

    activeDomElement.textContent += letter;

    oldTime = newTime;
    wordIndex++;
  }

  requestAnimationFrame(typing);
};

typing();

//mobilemenu
const hamburger = document.querySelector('.menu__hamburger');
const headerMobile = document.querySelector('.headerMobile');
const navigationMobile = document.querySelector('.navigation-mobile');

hamburger.addEventListener('click', () => {
  console.log('klik w hamburgera');

  if(headerMobile.classList.contains('menuActive')) {
    headerMobile.classList.remove('menuActive');
    navigationMobile.style.display = 'none';
    hamburger.classList.remove('changeHamburger');
  } else {
    headerMobile.classList.add('menuActive');
    navigationMobile.style.display = 'block';
    hamburger.classList.add('changeHamburger');
  }
});

navigationMobile.addEventListener('click', () => {
  console.log('klik w menu mobile');
  headerMobile.classList.remove('menuActive');
  navigationMobile.style.display = 'none';
});
