const BUTTON = 'button';
const KEY = 'key';
const GLOW = 'glow';
const SHIFT = 'shift';

const CHANGE_CASE = 'changeCase';
const LOWER_CASE = 'lowerCase';
const UPPER_CASE = 'upperCase';

export default class Key {
  constructor(key) {
    this.key = key;
    this.keyElement = document.createElement(BUTTON);
    this.createKey();
  }

  createKey() {
    this.keyElement.classList.add(KEY);
    this.keyElement.classList.add(GLOW);
    this.keyElement.classList.add(this.key.type);
    this.keyElement.classList.add(this.key.code.charAt(0).toLowerCase() + this.key.code.slice(1));
  }

  setKeyName(language, letterCase, shiftState) {
    if (shiftState === SHIFT) {
      if (this.key[language][shiftState] === CHANGE_CASE) {
        if (letterCase === LOWER_CASE) {
          this.keyElement.textContent = this.key[language][UPPER_CASE];
        } else {
          this.keyElement.textContent = this.key[language][LOWER_CASE];
        }
      } else {
        this.keyElement.textContent = this.key[language][shiftState];
      }
    } else {
      this.keyElement.textContent = this.key[language][letterCase];
    }
  }
}
