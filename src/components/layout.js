function createElement(element){
  const elementToCreate = document.createElement(element);

  elementToCreate.classList.add(element);
  document.body.append(elementToCreate);

  return elementToCreate;
}

const header = createElement('header');
const main = createElement('main');
const footer = createElement('footer');

const title = document.createElement('h1');
const keyboard = document.createElement('div');
const footerText = document.createElement('p');

title.textContent = 'Virtual keyboard';
footerText.innerHTML = `Клавиатура создана в операционной системе Windows.
                        <br>Для переключения языка комбинация: левыe ctrl + alt.`;

title.classList.add('title');
keyboard.classList.add('keyboard');
footerText.classList.add('footer-text');

header.append(title);
main.append(keyboard);
footer.append(footerText);