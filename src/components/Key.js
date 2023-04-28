export default class Key {

  constructor(key, language, letterCase) {
    this.key = key;
    this.keyElement = document.createElement('button');
    this.createKey();
    this.setKeyName(language, letterCase)
  }

  createKey(){  
    this.keyElement.classList.add('key');
    this.keyElement.classList.add('glow');
    this.keyElement.classList.add(this.key.type);
    this.keyElement.classList.add(this.key.code.charAt(0).toLowerCase() + this.key.code.slice(1));
  }
  
  setKeyName(language, letterCase){
    this.keyElement.textContent = this.key[language][letterCase];
  }
}