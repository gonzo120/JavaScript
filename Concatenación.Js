
/*
La concatenación es un tema básico pero poderoso puede ser utilizado con varios propósitos, uno de ellos es unir valores para dar información más detallada sobre algo.

El operador + es que utilizamos si queremos realizar una concatenación entre Strings.

Bien pongámoslo a prueba, ve al editor de código, a la función concatenacion() y declara una variable a la cual le asignamos la cadena “JavaScript” de esta manera.
*/
function concatenacion() {
    let nombre = 'Nelson';
    let saludo = 'Hola soy ' + nombre + " gonzalez";
    return saludo;   // Escribe tu código aquí
}
console.log(concatenacion())