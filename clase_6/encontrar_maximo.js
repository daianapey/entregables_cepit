/*Dado el siguiente arreglo
[4,7,9,3,1,45,67,23,29,78,11,16]
- Crear un programa que encuentre cuál es el número
más grande del arreglo e imprimirlo por consola
- Almacenar el número más grande en una variable
global y pasarlo a una función para determinar si el
número es par o impar*/
var arregloNumMax = [4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16];
var numeroMax = 0;
var indice;
for (indice = 0; indice < 12; indice++) {
    if (arregloNumMax[indice] > numeroMax)
        numeroMax = arregloNumMax[indice];
}
console.log("El número más grande es:" + numeroMax);
paridad(numeroMax);
// Función para determinar si el número es par o impar
function paridad(numeroMax) {
    if (numeroMax % 2 === 0) {
        console.log(numeroMax + " es un número par.");
    }
    else {
        console.log(numeroMax + " es un número impar.");
    }
}
// Determinar si el número más grande es par o impar
