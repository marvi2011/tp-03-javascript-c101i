/*Funciones: 4- Escribir el codigo de una funcion a la que se pasa como parametro un numero entero y devuelve como resultadouna cadena de texto que indica si el numero es para o impar. Mostrar por pantalla el resultado devuelto por la funcion */
function resultado() {
  if (numero % 2 === 0) {
    return `es par`;
  } else {
    return `es impar`;
  }
}
const numero = parseInt(prompt("Ingrese un número:"));
document.write(`El número ${numero} ${resultado(numero)}`);
