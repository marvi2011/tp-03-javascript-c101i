/*Desarrollar un sistema de cajero automático en JavaScript que permita al usuario realizar varias operaciones bancarias mediante un menú interactivo. El usuario podrá consultar el saldo, realizar ingresos y egresos de dinero, y otras operaciones adicionales. Al principio del programa declara una variable `saldo` inicial con un valor de $1000 (puedes elegir otro valor si prefieres). las opciones que se mostrarán al usuario son: 1. Ver saldo de la cuenta. 2. Ingresar dinero. 3. Retirar dinero. 4. Ver últimas  transacciones. 5. Salir. Importante, el usuario puede realizar varias veces las operaciones del cajero */
const transacciones = [];
let saldo = 1000;
let comienzo = alert(
  "Bienvenido a Rolling Bank , presione Aceptar para comenzar a operar"
);
/*function operar(){parseInt(
  prompt(
    "Que desea hacer?: 1- Consultar saldo, 2- Ingresar dinero, 3- Retirar dinero, 4- Ver últimas transcciones, 5- Salir "
  )} */

const operar = parseInt(
  prompt(
    "Que desea hacer?: 1- Consultar saldo, 2- Ingresar dinero, 3- Retirar dinero, 4- Ver últimas transcciones, 5- Salir "
  )
);

if (operar === 1) {
  document.write(`<h2>Su saldo es: $${saldo}</h2>`);
  console.log(saldo);
} else if (operar === 2) {
  let dineroIngresado = parseInt(
    prompt("Ingrese la suma que desea depositar:")
  );
  if (dineroIngresado === 0) {
    document.write("<h2>La cantidad ingresada no es válida</h2>");
  } else {
    document.write(`<h2>Ahora su saldo es: $${saldo + dineroIngresado}</h2>`);
  }

  transacciones.push(transacciones);
  console.log(transacciones);
}
if (operar === 3) {
  let dineroRetirado = parseInt(prompt("Ingrese la suma que desea retirar:"));

  if (dineroRetirado === 0 || dineroRetirado > saldo) {
    document.write("<h2>La cantidad ingresada no es válida</h2>");
  } else {
    document.write(`<h2>Ahora su saldo es: $${saldo - dineroRetirado}</h2>`);
  }
  transacciones.push(transacciones);
  console.log(transacciones);
} else if (operar === 4) {
  document.write(`<h2>Estas son sus transacciones: ${transacciones}</h2>`);
} else document.write("<h2>Muchas gracias</h2>");
