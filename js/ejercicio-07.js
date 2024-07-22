/*7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creacion de la tabla debe ser realizada con una funcion y mostrar solo los resultados del 1 al 10 del numero elegido por el usuario */
function tabla() {
  if (numero == 0) {
    document.write("Todo número multiplicado por 0, da por resultado 0. No hay tabla para mostrar");
  } else {
    document.write(`<table>
    <thead>
        <tr>
            <th>Tabla de multiplicar del número ${numero}</th>
        </tr>
    </thead>
    <tbody>`);
    for (let i = 1; i <= 10; i++) {
      document.write(`
        <tr>
            <td>${numero} * ${i} </td>
            <td>${numero * i}</td>
        </tr>`);
    }
    document.write(`</tbody> </table>`);
  }
}

const numero = parseInt(prompt("Ingrese un número:"));
`${tabla(numero)}`;
