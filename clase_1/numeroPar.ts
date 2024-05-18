import * as readlineSync from "readline-sync";
let parImpar:number=readlineSync.questionInt("Ingrese un número");
if (parImpar==0) {
    console.log("El número ingresado es cero");
}
else if (parImpar%2==0){
    console.log("El número ingresado es par");
}
else{
    console.log("El número es impar");
}