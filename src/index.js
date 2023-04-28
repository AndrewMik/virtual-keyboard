import keys from "./components/keys.json";
import Keyboard from './components/Keyboard';
import Key from './components/Key';
import './scss/main.scss';

import './components/layout';

const KEYBOARD = new Keyboard;

for(let i = 0; i < keys.length; i++){
  const keyButton = new Key(keys[i], KEYBOARD.language, KEYBOARD.letterCase);

  KEYBOARD.addKey(keyButton);
  KEYBOARD.append(keyButton.keyElement);
}

document.addEventListener('keydown', (event) => {
  event.preventDefault();
  const keyButton = document.querySelector(`.${event.code.charAt(0).toLowerCase() + event.code.slice(1)}`);
  keyButton.classList.add("active");
});

document.addEventListener('keyup', (event) => {
  const keyButton = document.querySelector(`.${event.code.charAt(0).toLowerCase() + event.code.slice(1)}`);
  keyButton.classList.remove("active");
});