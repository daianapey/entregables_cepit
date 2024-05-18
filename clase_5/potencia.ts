import * as rls from "readline-sync";

let base : number = rls.questionInt("Ingrese la base del numero al que quiere calcular su potencia: "); 
let exponente : number = rls.questionInt("Ingrese el exponente: "); 

function calcularPotencia (base:number, exponente:number):number {    
let potencia:number=1;
if (exponente >=0) {
    let i:number;    
      potencia = 1;
        for (i = 1; i <= exponente; i++) {
            potencia= potencia*base;
        };
    
        console.log("el resultado es: ", potencia);
            
} else if (exponente== 0) {
potencia=1;   
console.log("el resultado es: ", potencia);}
return potencia;
}
calcularPotencia(base, exponente);  