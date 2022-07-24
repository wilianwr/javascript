let lampadaOn = document.getElementById('lampadaOn');
let lampdaOff = document.getElementById('lampadaOff');
let lamp = document.getElementById('lamp');
let container = document.querySelector('body');
let title = document.querySelector('h1');

function isLampBroke() {
  return lamp.src.indexOf ('quebrada') > -1
}

function turnOn() {
  if (!isLampBroke() ) {
    lamp.src = './img/ligada.png';
    container.style.backgroundColor = 'white';
    title.style.color = 'black';
  }
}

function turnOff() {
  if (!isLampBroke() ) {
    lamp.src = './img/desligada.png';
    container.style.backgroundColor = 'black';
    title.style.color = 'white';
  }
}

function lampBroke() {
  lamp.src = './img/quebrada.png';
}

lampadaOn.addEventListener('click', turnOn);
lampdaOff.addEventListener('click', turnOff);
lamp.addEventListener('mouseenter', turnOn);
lamp.addEventListener('mouseout', turnOff);
lamp.addEventListener('dblclick', lampBroke);