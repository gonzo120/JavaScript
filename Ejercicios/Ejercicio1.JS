/*ejemplo de una función en JavaScript que encuentra el par de 
elementos adyacentes en un array de enteros que tiene el mayor producto, y devuelve ese producto:
*/

function encontrarMayorProducto(inputArray) {
    var mayorProducto = Number.NEGATIVE_INFINITY;
  
    for (var i = 0; i < inputArray.length - 1; i++) {
      var producto = inputArray[i] * inputArray[i + 1];
      if (producto > mayorProducto) {
        mayorProducto = producto;
      }
    }
  
    return mayorProducto;
  }

  var array = [1, 2, 3, 4, 5];
var resultado = encontrarMayorProducto(array);
console.log(resultado); // Salida: 20