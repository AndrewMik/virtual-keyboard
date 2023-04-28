import keys from './components/keys.json';
import Keyboard from './components/Keyboard';
import Key from './components/Key';
import './scss/main.scss';

import './components/layout';

const KEYBOARD = new Keyboard;

for(let i = 0; i < keys.length; i++){
  const keyButton = new Key(keys[i], KEYBOARD.language, KEYBOARD.letterCase);

  KEYBOARD.addKeyButton(keyButton);
  KEYBOARD.append(keyButton.keyElement);
}

document.addEventListener('keydown', (event) => {
  const keyButton = KEYBOARD.selectKeyButton(event);

  KEYBOARD.keyboard.forEach(keyButton => {
    if(keyButton.key.code === event.code){
      event.preventDefault();
    }
  });

  if(keyButton){
    keyButton.classList.toggle('active');

    if(keyButton.classList.contains('controlLeft')){
      KEYBOARD.isLeftCtrlActive = true;
    } else if(keyButton.classList.contains('altLeft')){
      KEYBOARD.isLeftAltActive = true;
    } else if(keyButton.classList.contains('capsLock')){
      KEYBOARD.changeLetterCase();
      KEYBOARD.changeButtons();
    }
  }

  if(KEYBOARD.isLeftCtrlActive && KEYBOARD.isLeftAltActive){
    KEYBOARD.changeLanguage();
    KEYBOARD.changeButtons();
  }
});

document.addEventListener('keyup', (event) => {
  const keyButton = KEYBOARD.selectKeyButton(event);

  if(keyButton){
    if(!keyButton.classList.contains('capsLock')){
      keyButton.classList.remove('active');
    }
   
    if(keyButton.classList.contains('controlLeft')){
      KEYBOARD.isLeftCtrlActive = false;
    } else if(keyButton.classList.contains('altLeft')){
      KEYBOARD.isLeftAltActive = false;
    }
  }
});