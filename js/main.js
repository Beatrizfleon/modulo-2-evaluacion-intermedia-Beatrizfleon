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

function myFunction() {
  console.log('mi función funciona?');

  const myInput = document.querySelector('.js-myInput');
  console.log(myInput.value);
  if (randomNumber === parseInt(myInput.value)) {
    // console.log('Has ganado campeona!');
    clue.innerHTML = 'has ganado campeona!';
  } else if (randomNumber > parseInt(myInput.value)) {
    // console.log('Demasiado bajo');
    clue.innerHTML = 'Demasiado bajo';
  } else if (randomNumber < parseInt(myInput.value)) {
    // console.log('Demasiado alto');
    clue.innerHTML = 'Demasiado alto';
  } else if (parseInt(myInput.value) > 100 || parseInt(myInput.value) < 1) {
    console.log('El número debe estar entre 1 y 100');
    clue.innerHTML = 'El número debe estar entre 1 y 100';
  }
}
