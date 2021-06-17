'use strict';

//typing
const typingPlace = document.querySelector('.typing');
const text = 'Look at my work';
let letterIndex = 0;
let oldTime = 0;
const speed = 200; 
console.log(typingPlace);

const typing = (newTime) => {
  const letter = text.substr(letterIndex, 1);
  console.log('start typing');

  if(newTime - oldTime > speed) {
    if(letterIndex === text.length) {
      console.log(letterIndex);
      return stop;
      // return setTimeout(() =>{
      //   typingPlace.textContent = '';
      //   letterIndex++;
      //   requestAnimationFrame(typing);
      // }, stop);
    }
    typingPlace.textContent += letter;
    oldTime = newTime;
    letterIndex++;
  }

  requestAnimationFrame(typing);
};

typing();