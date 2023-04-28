const KEYBOARD = document.querySelector(".keyboard"); 

function createKey(){
  const key = document.createElement("div");

  key.classList.add("key");

  KEYBOARD.append(key);
}

createKey();