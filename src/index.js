import keys from './components/keys.json';
import Keyboard from './components/Keyboard';
import Key from './components/Key';

import './scss/main.scss';
import './components/layout';

const KEYBOARD = new Keyboard();

const LOAD = 'load';
const BEFORE_UNLOAD = 'beforeunload';

const MOUSE_DOWN = 'mousedown';
const MOUSE_UP = 'mouseup';

const KEY_DOWN = 'keydown';
const KEY_UP = 'keyup';

for (let i = 0; i < keys.length; i + 1) {
  const keyButton = new Key(keys[i]);

  KEYBOARD.addKeyButton(keyButton);
}

window.addEventListener(LOAD, () => {
  KEYBOARD.getLocalStorage();
  KEYBOARD.changeButtons();
});

document.addEventListener(KEY_DOWN, (event) => {
  KEYBOARD.pressButtonHandler(event);
});

KEYBOARD.keyboardContainer.addEventListener(MOUSE_DOWN, (event) => {
  KEYBOARD.pressButtonHandler(event);
});

document.addEventListener(KEY_UP, (event) => {
  KEYBOARD.unpressButtonHandler(event);
});

KEYBOARD.keyboardContainer.addEventListener(MOUSE_UP, (event) => {
  KEYBOARD.unpressButtonHandler(event);
});

window.addEventListener(BEFORE_UNLOAD, () => {
  KEYBOARD.setLocalStorage();
});
