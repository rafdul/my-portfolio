'use strict';
import {eng, pol} from './languageVersion/languageVersion.js';

const menuAboaut = document.querySelectorAll('.menuAbout');
const menuProjects = document.querySelectorAll('.menuProjects');
const menuContact = document.querySelectorAll('.menuContacts');
const aboutTechnology = document.querySelector('.aboutTechnology');
const aboutText = document.querySelector('#aboutText');
const projectsPage = document.querySelectorAll('.projectsPage');
const projectsCode = document.querySelectorAll('.projectsCode');
const wideviewSubtitle = document.querySelector('#wideviewSubtitle');
const wideviewDescr = document.querySelector('#wideviewDescr');
const wideDashboardSubtitle = document.querySelector('#wideDashboardSubtitle');
const wideDashboardDescr = document.querySelector('#wideDashboardDescr');
const bulletinSubtitle = document.querySelector('#bulletinSubtitle');
const bulletinDescr = document.querySelector('#bulletinDescr');
const festivalSubtitle = document.querySelector('#festivalSubtitle');
const festivalDescr = document.querySelector('#festivalDescr');
const travelSubtitle = document.querySelector('#travelSubtitle');
const travelDescr = document.querySelector('#travelDescr');
const furnitureSubtitle = document.querySelector('#furnitureSubtitle');
const furnitureDescr = document.querySelector('#furnitureDescr');
const portfolioSubtitle = document.querySelector('#portfolioSubtitle');
const portfolioDescr = document.querySelector('#portfolioDescr');
const todoSubtitle = document.querySelector('#todoSubtitle');
const todoDescr = document.querySelector('#todoDescr');
const pizzeriaSubtitle = document.querySelector('#pizzeriaSubtitle');
const pizzeriaDescr = document.querySelector('#pizzeriaDescr');
const contactAddress = document.querySelector('.contactAddress');
const contactName = document.querySelector('.contactName');
const contactEmail = document.querySelector('.contactEmail');
const contactTitle = document.querySelector('.contactTitle');
const contactMessage = document.querySelector('.contactMessage');
const contactButton = document.querySelector('.contactButton');


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
aboutTechnology.innerText = eng.about.technology;
aboutText.innerHTML = eng.about.text;
for(const el of projectsPage) {
  el.innerText = eng.projects.page;
}
for(const el of projectsCode) {
  el.innerText = eng.projects.code;
}
wideviewSubtitle.innerText = eng.projects.wideview.subtitle;
wideviewDescr.innerText = eng.projects.wideview.description;
wideDashboardSubtitle.innerText = eng.projects.wideviewDashboard.subtitle;
wideDashboardDescr.innerText = eng.projects.wideviewDashboard.description;
bulletinSubtitle.innerText = eng.projects.bulletin.subtitle;
bulletinDescr.innerText = eng.projects.bulletin.description;
festivalSubtitle.innerText = eng.projects.festival.subtitle;
festivalDescr.innerText = eng.projects.festival.description;
travelSubtitle.innerText = eng.projects.travel.subtitle;
travelDescr.innerText = eng.projects.travel.description;
furnitureSubtitle.innerText = eng.projects.furniture.subtitle;
furnitureDescr.innerText = eng.projects.furniture.description;
portfolioSubtitle.innerText = eng.projects.portfolio.subtitle;
portfolioDescr.innerText = eng.projects.portfolio.description;
todoSubtitle.innerText = eng.projects.todo.subtitle;
todoDescr.innerText = eng.projects.todo.description;
pizzeriaSubtitle.innerText = eng.projects.pizzeria.subtitle;
pizzeriaDescr.innerText = eng.projects.pizzeria.description;
contactAddress.innerHTML = eng.contact.address;
contactName.setAttribute('placeholder', eng.contact.name);
contactName.setAttribute('data-error-text', eng.contact.nameError);
contactEmail.setAttribute('data-error-text', eng.contact.emailError);
contactTitle.setAttribute('placeholder', eng.contact.title);
contactMessage.setAttribute('placeholder', eng.contact.message);
contactMessage.setAttribute('data-error-text', eng.contact.messageError);
contactButton.innerText = eng.contact.button;

// zmiana wersji językowej w zależności od wartości na selekcie
// const select = document.querySelector('#language');
const select = document.querySelectorAll('.changeLang');
console.log('select', select);
console.log('select.value1', select.value);

for(const option of select) {
  option.addEventListener('click', e => {
    e.preventDefault();
    console.log('select.value2', select.value);
    console.log('option.value2', option.value);
  
    if(option.value === 'eng') {
      for(const el of menuAboaut) {
        el.innerText = eng.menu.about;
      }
      for(const el of menuProjects) {
        el.innerText = eng.menu.projects;
      }
      for(const el of menuContact) {
        el.innerText = eng.menu.contact;
      }
      aboutTechnology.innerText = eng.about.technology;
      aboutText.innerHTML = eng.about.text;
      for(const el of projectsPage) {
        el.innerText = eng.projects.page;
      }
      for(const el of projectsCode) {
        el.innerText = eng.projects.code;
      }
      wideviewSubtitle.innerText = eng.projects.wideview.subtitle;
      wideviewDescr.innerText = eng.projects.wideview.description;
      wideDashboardSubtitle.innerText = eng.projects.wideviewDashboard.subtitle;
      wideDashboardDescr.innerText = eng.projects.wideviewDashboard.description;
      bulletinSubtitle.innerText = eng.projects.bulletin.subtitle;
      bulletinDescr.innerText = eng.projects.bulletin.description;
      festivalSubtitle.innerText = eng.projects.festival.subtitle;
      festivalDescr.innerText = eng.projects.festival.description;
      travelSubtitle.innerText = eng.projects.travel.subtitle;
      travelDescr.innerText = eng.projects.travel.description;
      furnitureSubtitle.innerText = eng.projects.furniture.subtitle;
      furnitureDescr.innerText = eng.projects.furniture.description;
      portfolioSubtitle.innerText = eng.projects.portfolio.subtitle;
      portfolioDescr.innerText = eng.projects.portfolio.description;
      todoSubtitle.innerText = eng.projects.todo.subtitle;
      todoDescr.innerText = eng.projects.todo.description;
      pizzeriaSubtitle.innerText = eng.projects.pizzeria.subtitle;
      pizzeriaDescr.innerText = eng.projects.pizzeria.description;
      contactAddress.innerHTML = eng.contact.address;
      contactName.setAttribute('placeholder', eng.contact.name);
      contactName.setAttribute('data-error-text', eng.contact.nameError);
      contactEmail.setAttribute('data-error-text', eng.contact.emailError);
      contactTitle.setAttribute('placeholder', eng.contact.title);
      contactMessage.setAttribute('placeholder', eng.contact.message);
      contactMessage.setAttribute('data-error-text', eng.contact.messageError);
      contactButton.innerText = eng.contact.button;
    }
    
    if(option.value === 'pol') {
      for(const el of menuAboaut) {
        el.innerText = pol.menu.about;
      }
      for(const el of menuProjects) {
        el.innerText = pol.menu.projects;
      }
      for(const el of menuContact) {
        el.innerText = pol.menu.contact;
      }
      aboutTechnology.innerText = pol.about.technology;
      aboutText.innerHTML = pol.about.text;
      for(const el of projectsPage) {
        el.innerText = pol.projects.page;
      }
      for(const el of projectsCode) {
        el.innerText = pol.projects.code;
      }
      wideviewSubtitle.innerText = pol.projects.wideview.subtitle;
      wideviewDescr.innerText = pol.projects.wideview.description;
      wideDashboardSubtitle.innerText = pol.projects.wideviewDashboard.subtitle;
      wideDashboardDescr.innerText = pol.projects.wideviewDashboard.description;
      bulletinSubtitle.innerText = pol.projects.bulletin.subtitle;
      bulletinDescr.innerText = pol.projects.bulletin.description;
      festivalSubtitle.innerText = pol.projects.festival.subtitle;
      festivalDescr.innerText = pol.projects.festival.description;
      travelSubtitle.innerText = pol.projects.travel.subtitle;
      travelDescr.innerText = pol.projects.travel.description;
      furnitureSubtitle.innerText = pol.projects.furniture.subtitle;
      furnitureDescr.innerText = pol.projects.furniture.description;
      portfolioSubtitle.innerText = pol.projects.portfolio.subtitle;
      portfolioDescr.innerText = pol.projects.portfolio.description;
      todoSubtitle.innerText = pol.projects.todo.subtitle;
      todoDescr.innerText = pol.projects.todo.description;
      pizzeriaSubtitle.innerText = pol.projects.pizzeria.subtitle;
      pizzeriaDescr.innerText = pol.projects.pizzeria.description;
      contactAddress.innerHTML = pol.contact.address;
      contactName.setAttribute('placeholder', pol.contact.name);
      contactName.setAttribute('data-error-text', pol.contact.nameError);
      contactEmail.setAttribute('data-error-text', pol.contact.emailError);
      contactTitle.setAttribute('placeholder', pol.contact.title);
      contactMessage.setAttribute('placeholder', pol.contact.message);
      contactMessage.setAttribute('data-error-text', pol.contact.messageError);
      contactButton.innerText = pol.contact.button;
    }
  });
}

// select.addEventListener('click', e => {
//   e.preventDefault();
//   console.log('select.value2', select.value);

//   if(select.value === 'eng') {
//     for(const el of menuAboaut) {
//       el.innerText = eng.menu.about;
//     }
//     for(const el of menuProjects) {
//       el.innerText = eng.menu.projects;
//     }
//     for(const el of menuContact) {
//       el.innerText = eng.menu.contact;
//     }
//     aboutTechnology.innerText = eng.about.technology;
//     aboutText.innerHTML = eng.about.text;
//     for(const el of projectsPage) {
//       el.innerText = eng.projects.page;
//     }
//     for(const el of projectsCode) {
//       el.innerText = eng.projects.code;
//     }
//     wideviewSubtitle.innerText = eng.projects.wideview.subtitle;
//     wideviewDescr.innerText = eng.projects.wideview.description;
//     wideDashboardSubtitle.innerText = eng.projects.wideviewDashboard.subtitle;
//     wideDashboardDescr.innerText = eng.projects.wideviewDashboard.description;
//     bulletinSubtitle.innerText = eng.projects.bulletin.subtitle;
//     bulletinDescr.innerText = eng.projects.bulletin.description;
//     festivalSubtitle.innerText = eng.projects.festival.subtitle;
//     festivalDescr.innerText = eng.projects.festival.description;
//     travelSubtitle.innerText = eng.projects.travel.subtitle;
//     travelDescr.innerText = eng.projects.travel.description;
//     furnitureSubtitle.innerText = eng.projects.furniture.subtitle;
//     furnitureDescr.innerText = eng.projects.furniture.description;
//     portfolioSubtitle.innerText = eng.projects.portfolio.subtitle;
//     portfolioDescr.innerText = eng.projects.portfolio.description;
//     todoSubtitle.innerText = eng.projects.todo.subtitle;
//     todoDescr.innerText = eng.projects.todo.description;
//     pizzeriaSubtitle.innerText = eng.projects.pizzeria.subtitle;
//     pizzeriaDescr.innerText = eng.projects.pizzeria.description;
//     contactAddress.innerHTML = eng.contact.address;
//     contactName.setAttribute('placeholder', eng.contact.name);
//     contactName.setAttribute('data-error-text', eng.contact.nameError);
//     contactEmail.setAttribute('data-error-text', eng.contact.emailError);
//     contactTitle.setAttribute('placeholder', eng.contact.title);
//     contactMessage.setAttribute('placeholder', eng.contact.message);
//     contactMessage.setAttribute('data-error-text', eng.contact.messageError);
//     contactButton.innerText = eng.contact.button;
//   }
  
//   if(select.value === 'pol') {
//     for(const el of menuAboaut) {
//       el.innerText = pol.menu.about;
//     }
//     for(const el of menuProjects) {
//       el.innerText = pol.menu.projects;
//     }
//     for(const el of menuContact) {
//       el.innerText = pol.menu.contact;
//     }
//     aboutTechnology.innerText = pol.about.technology;
//     aboutText.innerHTML = pol.about.text;
//     for(const el of projectsPage) {
//       el.innerText = pol.projects.page;
//     }
//     for(const el of projectsCode) {
//       el.innerText = pol.projects.code;
//     }
//     wideviewSubtitle.innerText = pol.projects.wideview.subtitle;
//     wideviewDescr.innerText = pol.projects.wideview.description;
//     wideDashboardSubtitle.innerText = pol.projects.wideviewDashboard.subtitle;
//     wideDashboardDescr.innerText = pol.projects.wideviewDashboard.description;
//     bulletinSubtitle.innerText = pol.projects.bulletin.subtitle;
//     bulletinDescr.innerText = pol.projects.bulletin.description;
//     festivalSubtitle.innerText = pol.projects.festival.subtitle;
//     festivalDescr.innerText = pol.projects.festival.description;
//     travelSubtitle.innerText = pol.projects.travel.subtitle;
//     travelDescr.innerText = pol.projects.travel.description;
//     furnitureSubtitle.innerText = pol.projects.furniture.subtitle;
//     furnitureDescr.innerText = pol.projects.furniture.description;
//     portfolioSubtitle.innerText = pol.projects.portfolio.subtitle;
//     portfolioDescr.innerText = pol.projects.portfolio.description;
//     todoSubtitle.innerText = pol.projects.todo.subtitle;
//     todoDescr.innerText = pol.projects.todo.description;
//     pizzeriaSubtitle.innerText = pol.projects.pizzeria.subtitle;
//     pizzeriaDescr.innerText = pol.projects.pizzeria.description;
//     contactAddress.innerHTML = pol.contact.address;
//     contactName.setAttribute('placeholder', pol.contact.name);
//     contactName.setAttribute('data-error-text', pol.contact.nameError);
//     contactEmail.setAttribute('data-error-text', pol.contact.emailError);
//     contactTitle.setAttribute('placeholder', pol.contact.title);
//     contactMessage.setAttribute('placeholder', pol.contact.message);
//     contactMessage.setAttribute('data-error-text', pol.contact.messageError);
//     contactButton.innerText = pol.contact.button;
//   }
// });