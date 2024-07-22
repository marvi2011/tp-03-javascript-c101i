/*6- Solicitar por tanpalla al usuario ingresar el valor de los lados de un rectangulo, luego crear una funcion para calcular su perimetro y mostrarlo por pantalla. la formula del perimetro es p=2*(a+b) */
function perimetro() {
  if (lado1 == 0 || lado2 == 0) {
    return "Cero no es un número válido, por favor ingrese los datos nuevamente";
  } else {
    return 2 * (lado1 + lado2);
  }
}

const lado1 = parseInt(prompt("Ingrese el valor del lado 1:"));
const lado2 = parseInt(prompt("Ingrese el valor del lado 2:"));
document.write(`El perimetro calculado es: ${perimetro()}`);
