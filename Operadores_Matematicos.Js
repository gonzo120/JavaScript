/*
Los operadores matemáticos tal y como su nombre indica nos permiten operar con números para obtener un resultado esperado, al igual que con los tipos de datos existen varios, algunos más avanzados que otros, en este caso nos concentramos en los 5 principales los cuales son:

La suma representada con el signo +

La resta representada con el signo -

La multiplicación representada con el signo *

La división representada con el signo /

Módulo representado con el signo %; el módulo es el residuo de la división
*/

function operadoresMatematicos() {
    let suma = 14 + 5; // 19
    let resta = 10 - 3; // 7
    let multiplicacion = 6 * 7; // 42
    let division = 45 / 3; // 15
    let modulo = 5 % 5; // 0

    return [suma, resta, multiplicacion, division, modulo];// Escribe tu código aquí
}

console.log(operadoresMatematicos())