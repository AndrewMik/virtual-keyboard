const ENGLISH = 'english';
const RUSSIAN = 'russian';
const UPPER_CASE = 'upperCase';
const LOWER_CASE = 'lowerCase';
const KEYBOARD = '.keyboard';
const OUTPUT = '.keyboard-output';
const LANGUAGE = 'language';
const KEY_DOWN = 'keydown';
const KEY_UP = 'keyup';
const UNDEFINED = 'undefined';
const ACTIVE = 'active';

const CHAR = 'char';
const DIGIT = 'digit';

const CTRL_LEFT = 'controlLeft';
const ALT_LEFT = 'altLeft';
const CAPSLOCK = 'capsLock';
const DELETE = 'delete';
const BACKSPACE = 'backspace';
const ENTER = 'enter';
const TAB = 'tab';
const SPACE = 'space';
const SHIFT_LEFT = 'shiftLeft';
const SHIFT_RIGHT = 'shiftRight';

const NEW_LINE = '\n';
const TAB_INDENT = '\t';
const SPACE_INTERVAL = ' ';

export default class Keyboard {
  constructor() {
    this.keyboard = [];
    this.language = ENGLISH;
    this.letterCase = LOWER_CASE;
    this.keyboardContainer = document.querySelector(KEYBOARD);
    this.isLeftCtrlActive = false;
    this.isLeftAltActive = false;
    this.shiftState = false;
    this.keyboardOutput = document.querySelector(OUTPUT);
    this.shift = false;
  }

  addKeyButton(keyButton) {
    this.keyboard.push(keyButton);
    this.keyboardContainer.append(keyButton.keyElement);
  }

  changeLanguage() {
    if (this.language === ENGLISH) {
      this.language = RUSSIAN;
    } else {
      this.language = ENGLISH;
    }
  }

  changeLetterCase() {
    if (this.letterCase === UPPER_CASE) {
      this.letterCase = LOWER_CASE;
    } else {
      this.letterCase = UPPER_CASE;
    }
  }

  changeButtons() {
    this.keyboard.forEach((keyButton) => {
      keyButton.setKeyName(this.language, this.letterCase);
    });
  }

  shiftButtons() {
    this.keyboard.forEach((keyButton) => {
      this.shift = 'shift';
      keyButton.setKeyName(this.language, this.letterCase, this.shift);
    });
  }

  selectKeyButton(event) {
    this.state = true;
    if (event.type === KEY_DOWN || event.type === KEY_UP) {
      return document.querySelector(`.${event.code.charAt(0).toLowerCase() + event.code.slice(1)}`);
    }
    return event.target;
  }

  setLocalStorage() {
    localStorage.setItem(LANGUAGE, this.language);
  }

  getLocalStorage() {
    if (localStorage.getItem(LANGUAGE)) {
      this.language = localStorage.getItem(LANGUAGE);
      if (this.language === UNDEFINED) {
        this.language = ENGLISH;
      }
    }
  }

  insertText(text) {
    const start = this.keyboardOutput.selectionStart;
    const end = this.keyboardOutput.selectionEnd;

    const finalText = this.keyboardOutput.value.substring(0, start)
                      + text + this.keyboardOutput.value.substring(end);

    this.keyboardOutput.value = finalText;

    this.keyboardOutput.selectionEnd = start + text.length;
  }

  delete() {
    const start = this.keyboardOutput.selectionStart;
    const end = this.keyboardOutput.selectionEnd;

    let finalText;

    if (start === end) {
      finalText = this.keyboardOutput.value.substring(0, start)
                + this.keyboardOutput.value.substring(end + 1);
    } else {
      finalText = this.keyboardOutput.value.substring(0, start)
                + this.keyboardOutput.value.substring(end);
    }

    this.keyboardOutput.value = finalText;

    this.keyboardOutput.selectionEnd = start;
  }

  backspace() {
    const start = this.keyboardOutput.selectionStart;
    const end = this.keyboardOutput.selectionEnd;

    let finalText;

    if (start === end) {
      finalText = this.keyboardOutput.value.substring(0, start - 1)
                + this.keyboardOutput.value.substring(end);
    } else {
      finalText = this.keyboardOutput.value.substring(0, start)
                + this.keyboardOutput.value.substring(end);
    }

    this.keyboardOutput.value = finalText;

    this.keyboardOutput.selectionEnd = (start === end) ? start - 1 : start;
  }

  enter() {
    const start = this.keyboardOutput.selectionStart;
    const end = this.keyboardOutput.selectionEnd;

    const finalText = this.keyboardOutput.value.substring(0, start)
                     + NEW_LINE
                     + this.keyboardOutput.value.substring(end);

    this.keyboardOutput.value = finalText;

    this.keyboardOutput.setSelectionRange(start + 1, start + 1);
  }

  tab() {
    const start = this.keyboardOutput.selectionStart;
    const end = this.keyboardOutput.selectionEnd;

    const finalText = this.keyboardOutput.value.substring(0, start)
                    + TAB_INDENT
                    + this.keyboardOutput.value.substring(end);

    this.keyboardOutput.value = finalText;

    this.keyboardOutput.selectionStart = start + 1;
  }

  space() {
    this.insertText(SPACE_INTERVAL);
  }

  pressButtonHandler(event) {
    const keyButton = this.selectKeyButton(event);

    this.keyboard.forEach((button) => {
      if (button.key.code === event.code) {
        event.preventDefault();
      }
    });

    if (keyButton) {
      keyButton.classList.toggle(ACTIVE);

      switch (true) {
        case keyButton.classList.contains(CTRL_LEFT):
          this.isLeftCtrlActive = true;
          break;
        case keyButton.classList.contains(ALT_LEFT):
          this.isLeftAltActive = true;
          break;
        case keyButton.classList.contains(CAPSLOCK):
          this.changeLetterCase();
          this.changeButtons();
          break;
        case keyButton.classList.contains(CHAR):
        case keyButton.classList.contains(DIGIT):
          this.insertText(keyButton.textContent);
          break;
        case keyButton.classList.contains(DELETE):
          this.delete();
          break;
        case keyButton.classList.contains(BACKSPACE):
          this.backspace();
          break;
        case keyButton.classList.contains(ENTER):
          this.enter();
          break;
        case keyButton.classList.contains(TAB):
          this.tab();
          break;
        case keyButton.classList.contains(SPACE):
          this.space();
          break;
        case keyButton.classList.contains(SHIFT_LEFT):
        case keyButton.classList.contains(SHIFT_RIGHT):
          this.shiftButtons();
          break;
        default:
      }

      if (this.isLeftCtrlActive && this.isLeftAltActive) {
        this.changeLanguage();
        this.changeButtons();
      }
    }
  }

  unpressButtonHandler(event) {
    const keyButton = this.selectKeyButton(event);

    if (keyButton) {
      if (!keyButton.classList.contains(CAPSLOCK)) {
        keyButton.classList.remove(ACTIVE);
      }

      switch (true) {
        case keyButton.classList.contains(CTRL_LEFT):
          this.isLeftCtrlActive = false;
          break;
        case keyButton.classList.contains(ALT_LEFT):
          this.isLeftAltActive = false;
          break;
        case keyButton.classList.contains(SHIFT_LEFT):
        case keyButton.classList.contains(SHIFT_RIGHT):
          this.shift = false;
          this.changeButtons();
          break;
        default:
      }
    }

    this.keyboardOutput.focus();
  }
}
