import keys from "./components/keys.json";
import Keyboard from './components/Keyboard';
import Key from './components/Key';
import './scss/main.scss';

import './components/layout';

const KEYBOARD = new Keyboard;

function selectKeyButton(event){
  return document.querySelector(`.${event.code.charAt(0).toLowerCase() + event.code.slice(1)}`);
}

for(let i = 0; i < keys.length; i++){
  const keyButton = new Key(keys[i], KEYBOARD.language, KEYBOARD.letterCase);

  KEYBOARD.addKey(keyButton);
  KEYBOARD.append(keyButton.keyElement);
}

document.addEventListener('keydown', (event) => {
  KEYBOARD.keyboard.forEach(keyButton => {
    if(keyButton.key.code === event.code){
      event.preventDefault();
    }
  });

  const keyButton = selectKeyButton(event);

  if(keyButton){
    keyButton.classList.add("active");
  }

  const activeButtons = document.querySelectorAll(".active");

  let isLeftShiftActive = false;
  let isLeftAltActive = false;

  activeButtons.forEach(keyButton => {
   
    if(keyButton.classList.contains("shiftLeft")){
      isLeftShiftActive = true;
    } else if(keyButton.classList.contains("altLeft")){
      isLeftAltActive = true;
    }
  });

  if(isLeftShiftActive && isLeftAltActive){
    KEYBOARD.changeLanguage();

    KEYBOARD.keyboard.forEach(keyButton => {
      keyButton.setKeyName(KEYBOARD.language, KEYBOARD.letterCase);
    });    
  }
});

document.addEventListener('keyup', (event) => {
  const keyButton = selectKeyButton(event);

  if(keyButton){
    keyButton.classList.remove("active");
  }
});