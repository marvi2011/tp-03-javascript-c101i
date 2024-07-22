/*5- Definir una funcion que muestre información sobre una cadena de texto que se la pasa como argumento. a partir de la cadena que se lo pasa, la funcion determinara si esa cadena esta formada solo por mayusculas, solo por minusculas o por una mezcla de ambas */
function letras() {
  if (frase === frase.toUpperCase()) {
    return "mayúsculas";
  } else if (frase === frase.toLowerCase()) {
    return "minúsculas";
  } else {
    return "minúsculas y mayúsculas";
  }
}
const frase = prompt("Ingrese una frase:");
document.write(`<h2>La frase ingresada está escrita en ${letras(frase)}</h2>`);
