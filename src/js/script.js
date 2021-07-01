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
      // console.log('errorText', errorText);
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
    // console.log('field 1:',field);
    field.parentElement.appendChild(div);
  } else {
    if (!field.nextElementSibling.classList.contains('form-error-text')) {
      // console.log('field 2:',field);
      field.parentElement.insertBefore(div, field.nextElementSibling);
    }
  }
}

function toggleErrorField(field, show) {
  const errorText = field.nextElementSibling;
  if (errorText !== null) {
    if (errorText.classList.contains('form-error-text')) {
      // console.log('errorText', errorText);
      errorText.style.display = show ? 'block' : 'none';
    }
  }
}

function markFieldAsError(field, show) {
  if (show) {
    // console.log('field w markFieldAsError 1:',field);
    field.classList.add('field-error');
  } else {
    // console.log('field w markFieldAsError 2:',field);
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
  console.log('formErrors1',formErrors);

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
    const submit = form.querySelector('[type=submit]');
    submit.disabled = true;
    submit.classList.add('loading');

    console.log('formErrors2',formErrors);
    console.log('form', form);
    const formData = new FormData();
    formData.append('name', document.querySelector('#name').value);
    formData.append('email', document.querySelector('#email').value);
    formData.append('title', document.querySelector('#title').value);
    formData.append('message', document.querySelector('#message').value);
    console.log('formData', formData);
    for (var p of formData) {
      console.log(p);
    }

    // const dataFromForm = {
    //   name: document.querySelector('#name').value,
    //   email: document.querySelector('#email').value,
    //   title: document.querySelector('#title').value,
    //   message: document.querySelector('#message').value,
    // };
    // const dataToSend = JSON.stringify(dataFromForm);
    // console.log('dataToSend', dataToSend);

    const url = form.getAttribute('action'); 
    const method = form.getAttribute('method');

    fetch(url, {
      method: method,
      body: formData
    })
      .then(res => res.json())
      .then(res => {
        console.log('res', res);
        if (res.errors) { //błędne pola
          const selectors = res.errors.map(el => `[name="${el}"]`);
          const fieldsWithErrors = form.querySelectorAll(selectors.join(','));
          for (const el of fieldsWithErrors) {
            markFieldAsError(el, true);
            toggleErrorField(el, true);
          }
        } else { //pola są ok - sprawdzamy status wysyłki
          if (res.status === 'ok') {
            //wyświetlamy komunikat powodzenia, cieszymy sie
          }
          if (res.status === 'error') {
            //komunikat błędu, niepowodzenia
          }
        }
      })
      .finally(() => {
        submit.disabled = false;
        submit.classList.remove('loading');
      });
  }
});


