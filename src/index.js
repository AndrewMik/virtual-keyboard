import keys from "./components/keys.json";
import Keyboard from './components/Keyboard';
import Key from './components/Key';
import './scss/main.scss';

import './components/layout';

const KEYBOARD = new Keyboard;

for(let key in keys){
  const keyButton = new Key(key);
  const keyElement = keyButton.createKey();
  KEYBOARD.addKey(keyButton);
  KEYBOARD.append(keyElement);
}