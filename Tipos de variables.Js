/* 
Tipos de datos
Ahora que sabemos qué son las variables pasemos entonces a conocer que tipos de datos podemos almacenar en ellas.

JavaScript soporta una amplia cantidad de tipos de datos, estos son los principales que podemos encontrar en este lenguaje:

String: Representa un texto.

Number: Representa un número en cualquier rango de valores.

Boolean: Representa un valor verdadero o falso es decir true o false.

null: Representa la ausencia de un dato.

Array: Lista de datos que puede ser recorrida (iterada) se forma con ([...]).

Object: Almacena un grupo de datos como los anteriores se forma con corchetes ({...}).

Pongámoslo a prueba, dentro de la función tiposDeDatos(), vamos a definir las siguientes variables con sus respectivos valores.
*/

function tiposDeDatos() {
  let saludo = "¡Hola mundo!"; // tipo de dato String
  let siete = 7; // tipo de dato Number
  let auto = {
            color: "azul",
            marca: "mitsubishi"
          }; // tipo de dato Object
  let tareas = ["Cepillar mís dientes", "Hacer mís tareas"] // tipo de dato Array
  let booleano = true; // tipo de dato Boolean
  let nada = null; // tipo de dato Null
  return [saludo, siete, auto, tareas, booleano, nada];
  
  }
console.log(tiposDeDatos());