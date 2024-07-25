/*3- Escribir un script" que simule el lanzamiento de 2 dados. Hacer uso de la funcion math.randon para abtener numeros aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar los dados y anotar en un array el numero de operaciones de dicha suma, repitiendo 50 veces esta operacion */
const min = 1;
const max = 6;
let resultados = [];
for (let i = 0; i < 50; i++) {
 
  let random1 = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(random1);
  let random2 = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(random2);
;
  let suma = random1 + random2;
  console.log(suma);

  resultados.push(suma)};
  let noDuplicados = resultados.filter(
    (item, index) => resultados.indexOf(item) === index
  );
  console.log(noDuplicados);
  
  // contar la cantidad de veces que se repitio una muestra
  let resultado = [];
  
  for (i = 0; i < noDuplicados.length; i++) {
    let repeticiones = 0;
    for (j = 0; j < resultados.length; j++) {
      if (noDuplicados[i] === resultados[j]) repeticiones++;
    }
    resultado[i] = repeticiones;
  }
  
  // muestro los resultados
  document.write(`<table>
  <thead>
      <tr>
          <th>Resultado de la suma de ambos dados</th>
          <th>Cantidad de veces que salió este resultado</th>
      </tr>
  </thead>
  <tbody>`);
  for (let i = 0; i < noDuplicados.length; i++) {
    document.write(`
      <tr>
          <td>${noDuplicados[i]} </td>
          <td>${resultado[i]} </td>
      </tr>`);
  }
  document.write(`
      </tbody>
  </table>`);