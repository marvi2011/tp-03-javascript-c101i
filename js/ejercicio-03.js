/*3- Escribir un script" que simule el lanzamiento de 2 dados. Hacer uso de la funcion math.randon para abtener numeros aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar los dados y anotar en un array el numero de operaciones de dicha suma, repitiendo 50 veces esta operacion */
const min = 1;
const max = 6;
let resultados = [];
for (let i = 0; i < 3; i++) {
  let dado1 = parseInt(alert(`Presione "Aceptar" para tirar el primer dado`));
  let random1 = Math.floor(Math.random() * (max - min + 1) + min);
  let dado2 = parseInt(alert(`Presione "Aceptar" para tirar el segundo dado`));
  let random2 = Math.floor(Math.random() * (max - min + 1) + min);
  document.write(`<p>El resultado del primer dado es: ${random1}</p>`);
  document.write(`<p>El resultado del segundo dado es: ${random2}</p>`);
  let suma = random1 + random2;
  console.log(suma);
  document.write(`<p>La suma de ambos dados es: ${suma}</p><br>`);
  resultados.push(suma);
}
