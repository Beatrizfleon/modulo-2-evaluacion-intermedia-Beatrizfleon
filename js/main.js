console.log('hola');

//Selecciono el elemento sobre el que voy a escuchar el evento
const testButton = document.querySelector('.js-button');

// Busco un ejemplo de función que genera un "random number" entre 1 y 100

const randomNumber = Math.floor(Math.random() * 100) + 1;

//compruebo como funciona
console.log(randomNumber);

//Registro la función "listener" sobre el elemento a escuchar con una función "handler" que definiré después
testButton.addEventListener('click', myFunction);
const clue = document.querySelector('.clue');

function myFunction(ev) {
  ev.preventDefault();
  giveClue();

  // console.log('mi función funciona?');
}

function giveClue() {
  const myInput = document.querySelector('.js-myInput');
  console.log(myInput.value);
  const myInputValue = parseInt(myInput.value);
  if (randomNumber === myInputValue) {
    // console.log('Has ganado campeona!');
    paintClue('has ganado campeona!');
  } else if (myInputValue > 100 || myInputValue < 1) {
    // console.log('El número debe estar entre 1 y 100');
    paintClue('El número debe estar entre 1 y 100');
  } else if (randomNumber > myInputValue) {
    // console.log('Demasiado bajo');
    paintClue('Demasiado bajo');
  } else if (randomNumber < myInputValue) {
    // console.log('Demasiado alto');
    paintClue('Demasiado alto');
  }
  //sacar a una función el innerHTML

  function paintClue(clueMessage) {
    clue.innerHTML = clueMessage;
  }
}
