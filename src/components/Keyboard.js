const ENGLISH = 'english';
const RUSSIAN = 'russian';
const UPPER_CASE = 'upperCase';
const LOWER_CASE = 'lowerCase';

export default class Keyboard {

  constructor() {
    this.keyboard = [];
    this.language = ENGLISH;
    this.letterCase = UPPER_CASE;
    this.keyboardContainer = document.querySelector('.keyboard'); 
    this.isLeftCtrlActive = false;
    this.isLeftAltActive = false;
    this.shiftState = false;
    this.keyboardOutput = document.querySelector('.keyboard-output'); 
    this.output = "";
  }

  addKeyButton(keyButton){
    this.keyboard.push(keyButton);
  }

  append(key){
    this.keyboardContainer.append(key);
  }

  changeLanguage(){
    if(this.language === ENGLISH){
      this.language = RUSSIAN;
    } else {
      this.language = ENGLISH;
    }
  }

  changeLetterCase(){
    if(this.letterCase === UPPER_CASE){
      this.letterCase = LOWER_CASE;
    } else {
      this.letterCase = UPPER_CASE;
    }
  }

  changeButtons(){
    this.keyboard.forEach(keyButton => {
      keyButton.setKeyName(this.language, this.letterCase);
    });  
  }

  selectKeyButton(event){
    return document.querySelector(`.${event.code.charAt(0).toLowerCase() + event.code.slice(1)}`);
  }
}