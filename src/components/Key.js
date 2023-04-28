export default class Key {

  constructor(key) {
    this.key = key;
  }

  createKey(){
    const keyElement = document.createElement("button");

    keyElement.classList.add("key");
    keyElement.classList.add("glow-on-hover");

    keyElement.textContent = this.key;

    switch(this.key){
      case "one":
        keyElement.textContent = "1";
        break;
      case "two":
        keyElement.textContent = "2";
        break;
      case "three":
        keyElement.textContent = "3";
        break;
      case "four":
        keyElement.textContent = "4";
        break;
      case "five":
        keyElement.textContent = "5";
        break;
      case "six":
        keyElement.textContent = "6";
        break;
      case "seven":
        keyElement.textContent = "7";
        break;
      case "eight":
        keyElement.textContent = "8";
        break;
      case "nine":
        keyElement.textContent = "9";
        break;
      case "zero":
        keyElement.textContent = "0";
        break;
      case "backspace":
        keyElement.classList.add("backspace");
        keyElement.textContent = "←";
        break;
      case "tab":
        keyElement.classList.add("tab");
        break;
      case "del":
        keyElement.classList.add("delete");
        break;
      case "caps":
        keyElement.classList.add("caps");
        break;
      case "enter":
        keyElement.classList.add("enter");
        break;
      case "left-shift":
        keyElement.textContent = "shift";
        keyElement.classList.add("left-shift");
        break;
      case "right-shift":
        keyElement.textContent = "shift";
        keyElement.classList.add("right-shift");
        break;
      case "left-ctrl":
        keyElement.textContent = "ctrl";
        break;
      case "right-ctrl":
        keyElement.textContent = "ctrl";
        break;
      case "left-alt":
        keyElement.textContent = "alt";
        break;
      case "right-alt":
        keyElement.textContent = "alt";
        break;
      case "space":
        keyElement.classList.add("space");
        break;
      case "up-arrow":
        keyElement.textContent = "↑";
        break;
      case "left-arrow":
        keyElement.textContent = "←";
        break;
      case "down-arrow":
        keyElement.textContent = "↓";
        break;
      case "right-arrow":
        keyElement.textContent = "→";
        break;
    }

    return keyElement;
  }
}