import * as rls from "readline-sync";

let numero1 : number = rls.questionInt("Ingrese el numero: "); 

function esMultiplo (numero1:number, numero2:number):boolean {
    return(numero1%numero2==0)}

    function cantDivisores(numero1:number):number {
        let cantidad = 0;
    for (let numero2 = 1; numero2<= numero1; numero2++) {
        if (esMultiplo(numero1,numero2)) {
            cantidad++;
        }
   console.log(cantidad); }
    return cantidad;
    }
    cantDivisores(numero1)