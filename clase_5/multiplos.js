"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var numero1 = rls.questionInt("Ingrese el primer numero: ");
var numero2 = rls.questionInt("Ingrese el segundo numero: ");
function esMultiplo(numero1, numero2) {
    return (numero1 % numero2 == 0);
}
if (esMultiplo(numero1, numero2)) {
    console.log("el primer numero ingresado es multiplo del segundo numero");
}
else {
    console.log("el primer numero ingresado no es multiplo del segundo numero");
}
