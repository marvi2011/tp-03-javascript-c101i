/*2- Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo (array), cuando el usuario selecciones "cancelar" se debe mostrar el arreglo generadoj, luego realizar las siguientes acciones
 * mostrar la longitud length del arreglo
 * mostrar en el documento web los items de las posiciones 1 y 3 y ultima
 * añadir en la ultima posición la ciudad de Paris
 * escribir por pantalla el elemento que ocupa la 2 posición*/
let ciudades = [];
do {
  let ciudad = prompt("Ingrese una ciudad:");
  ciudades.push(ciudad);
  console.log(ciudades);
} while (confirm("¿Desea seguir agregando ciudades?"));

document.write(
  `<h2>La cantidad de ciudades ingresadas es: ${ciudades.length}</h2>`
);
document.write(`<h2>La ciudad en la primera posición es: ${ciudades[0]}</h2>`);
document.write(`<h2>La ciudad en la tercera posicíón es: ${ciudades[2]}</h2>`);
document.write(
  `<h2>La ciudad en la última posición es: ${
    ciudades[ciudades.length - 1]
  }</h2>`
);
ciudades.push("Paris");
document.write(
  `<h2>Ahora la última ciudad es: ${ciudades[ciudades.length - 1]}</h2>`
);
document.write(`<h2>La ciudad en la posición 2 es: ${ciudades[1]}</h2>`);
ciudades.splice(1, 0, "Barcelona");
document.write(`<h2>La nueva segunda posición es: ${ciudades[1]}</h2>`);
