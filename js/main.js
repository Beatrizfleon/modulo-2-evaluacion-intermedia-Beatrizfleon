console.log('hola');

//Selecciono el elemento sobre el que voy a escuchar el evento
const testButton = document.querySelector('.js-button');

// Busco un ejemplo de función que genera un "random number" entre 1 y 100

const randomNumber = Math.floor(Math.random() * 100) + 1;

//compruebo como funciona
console.log(randomNumber);

//Registro la función "listener" sobre el elemento a escuchar con una función "handler" que definiré después
testButton.addEventListener('click', myFunction);

function myFunction() {
  console.log('mi función funciona?');

  const myInput = document.querySelector('.js-myInput');
  console.log(myInput.value);
  if (randomNumber === parseInt(myInput.value)) {
    console.log('has ganado campeona!');
  }
}
