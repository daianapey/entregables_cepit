"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var parImpar = readlineSync.questionInt("Ingrese un número");
if (parImpar == 0) {
    console.log("El número ingresado es cero");
}
else if (parImpar % 2 == 0) {
    console.log("El número ingresado es par");
}
else {
    console.log("El número es impar");
}
