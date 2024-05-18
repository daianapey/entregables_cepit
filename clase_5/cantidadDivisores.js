"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var numero1 = rls.questionInt("Ingrese el numero: ");
function esMultiplo(numero1, numero2) {
    return (numero1 % numero2 == 0);
}
function cantDivisores(numero1) {
    var cantidad = 0;
    for (var numero2 = 1; numero2 <= numero1; numero2++) {
        if (esMultiplo(numero1, numero2)) {
            cantidad++;
        }
    }
    return cantidad;
}
cantDivisores(numero1);
