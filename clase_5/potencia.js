"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var base = rls.questionInt("Ingrese la base del numero al que quiere calcular su potencia: ");
var exponente = rls.questionInt("Ingrese el exponente: ");
function calcularPotencia(base, exponente) {
    var potencia = 1;
    if (exponente >= 0) {
        var i = void 0;
        potencia = 1;
        for (i = 1; i <= exponente; i++) {
            potencia = potencia * base;
        }
        ;
        console.log("el resultado es: ", potencia);
    }
    else if (exponente == 0) {
        potencia = 1;
        console.log("el resultado es: ", potencia);
    }
    return potencia;
}
calcularPotencia(base, exponente);
