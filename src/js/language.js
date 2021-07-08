'use strict';
import {eng, pol} from './languageVersion/languageVersion.js';

const menuAboaut = document.querySelectorAll('.menuAbout');
const menuProjects = document.querySelectorAll('.menuProjects');
const menuContact = document.querySelectorAll('.menuContacts');
console.log('menuAboaut', menuAboaut);

// załadowanie tekstów przy defaultowym ustawieniu na angielski
for(const el of menuAboaut) {
  el.innerText = eng.menu.about;
}
for(const el of menuProjects) {
  el.innerText = eng.menu.projects;
}
for(const el of menuContact) {
  el.innerText = eng.menu.contact;
}

// zmiana wersji językowej w zależności od wartości na selekcie
const select = document.querySelector('#language');
console.log('select', select);
console.log('select.value1', select.value);

select.addEventListener('click', e => {
  e.preventDefault();
  console.log('select.value2', select.value);

  if(select.value === 'eng') {
    for(const el of menuAboaut) {
      el.innerText = eng.menu.about;
    }
    for(const el of menuProjects) {
      el.innerText = eng.menu.projects;
    }
    for(const el of menuContact) {
      el.innerText = eng.menu.contact;
    }
  }
  
  if(select.value === 'pol') {
    for(const el of menuAboaut) {
      el.innerText = pol.menu.about;
    }
    for(const el of menuProjects) {
      el.innerText = pol.menu.projects;
    }
    for(const el of menuContact) {
      el.innerText = pol.menu.contact;
    }
  }
});