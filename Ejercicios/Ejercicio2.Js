/*A continuación, definiremos un polígono de interés n. Tu tarea es encontrar el área de un polígono dado n.
Un polígono de interés 1 es simplemente un cuadrado con un lado de longitud 1. Un polígono de interés n 
se obtiene tomando el polígono de interés n - 1 
y añadiendo polígonos de interés 1 a su borde, uno al lado del otro.
Puedes ver los polígonos de interés 1, 2, 3 y 4 en la imagen de abajo. */

function calculatePolygonArea(n) {
    return n * n + (n - 1) * (n - 1);
  }

  var area = calculatePolygonArea(3);
console.log(area); // Output: 13