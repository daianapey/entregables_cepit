import * as rls from "readline-sync";

let numero1 : number = rls.questionInt("Ingrese el primer numero: "); 
let numero2 : number = rls.questionInt("Ingrese el segundo numero: "); 

function esMultiplo (numero1:number, numero2:number):boolean {
    return(numero1%numero2==0)}
    if (esMultiplo(numero1,numero2)) {
        console.log("el primer numero ingresado es multiplo del segundo numero");
    }
    else {
    console.log("el primer numero ingresado no es multiplo del segundo numero");
    }
