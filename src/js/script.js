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

//form
function removeFieldError(field) { //usuwa komunikat o błędzie
  const errorText = field.nextElementSibling;
  if (errorText !== null) {
    if (errorText.classList.contains('form-error-text')) {
      console.log('errorText', errorText);
      errorText.remove();
    }
  }
}

function createFieldError(field, text) {
  removeFieldError(field);
  const div = document.createElement('div');
  div.classList.add('form-error-text');
  div.innerText = text;
  if (field.nextElementSibling === null) {
    console.log('field 1:',field);
    field.parentElement.appendChild(div);
  } else {
    if (!field.nextElementSibling.classList.contains('form-error-text')) {
      console.log('field 2:',field);
      field.parentElement.insertBefore(div, field.nextElementSibling);
    }
  }
}

function toggleErrorField(field, show) {
  const errorText = field.nextElementSibling;
  if (errorText !== null) {
    if (errorText.classList.contains('form-error-text')) {
      console.log('errorText', errorText);
      errorText.style.display = show ? 'block' : 'none';
    }
  }
}

function markFieldAsError(field, show) {
  if (show) {
    console.log('field w markFieldAsError 1:',field);
    field.classList.add('field-error');
  } else {
    console.log('field w markFieldAsError 2:',field);
    field.classList.remove('field-error');
    toggleErrorField(field, false);
  }
}

const form = document.querySelector('.form');
const inputs = form.querySelectorAll('[required]');

form.setAttribute('novalidate', true);

for (const el of inputs) {
  el.addEventListener('input', e => markFieldAsError(e.target, !e.target.checkValidity()));
}

form.addEventListener('submit', e => {
  e.preventDefault();

  let formErrors = false;
  console.log(formErrors);

  for (const el of inputs) {
    markFieldAsError(el, false);
    toggleErrorField(el, false);

    if (!el.checkValidity()) {
      createFieldError(el, el.dataset.errorText);
      markFieldAsError(el, true);
      toggleErrorField(el, true);
      formErrors = true;
    }
  }

  if (!formErrors) {
    const formData = new FormData(form);
    console.log('formData', formData);
  }
});


