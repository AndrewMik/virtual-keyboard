const PAGE_TITLE = 'Virtual keyboard';
const TITLE = 'title';
const OUTPUT = 'keyboard-output';
const KEYBOARD = 'keyboard';
const FOOTER_TEXT = 'footer-text';
const TEXT = `Клавиатура создана в операционной системе Windows.
             <br>Для переключения языка комбинация: левыe ctrl + alt.`;

const HEADER = 'header';
const MAIN = 'main';
const FOOTER = 'footer';

const HEADING = 'h1';
const TEXTAREA = 'textarea';
const DIV = 'div';
const PARAGRAPH = 'p';

function createElement(element) {
  const elementToCreate = document.createElement(element);

  elementToCreate.classList.add(element);
  document.body.append(elementToCreate);

  return elementToCreate;
}

const header = createElement(HEADER);
const main = createElement(MAIN);
const footer = createElement(FOOTER);

const title = document.createElement(HEADING);
const textArea = document.createElement(TEXTAREA);
const keyboard = document.createElement(DIV);
const footerText = document.createElement(PARAGRAPH);

title.textContent = PAGE_TITLE;
footerText.innerHTML = TEXT;

title.classList.add(TITLE);
textArea.classList.add(OUTPUT);
keyboard.classList.add(KEYBOARD);
footerText.classList.add(FOOTER_TEXT);

header.append(title);
main.append(textArea);
main.append(keyboard);
footer.append(footerText);
