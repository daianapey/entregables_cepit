let arregloNumMax : number[] = [4,7,9,3,1,45,67,23,29,78,11,16];
let numeroMax:number =0;
let contador:number;


for (contador = 0; contador<12; contador++){
    if (arregloNumMax[contador] > numeroMax)
        numeroMax= arregloNumMax[contador]
}
console.log("El número más grande es:" +numeroMax); 


// Función para determinar si el número es par o impar
function paridad(numeroMax: number){
    console.log("El número más grande es:" +numeroMax); 
    if (numeroMax % 2 === 0) {
        console.log(numeroMax+" es un número par.");
    } else {
        console.log(numeroMax+" es un número impar.");
    }
}
// Determinar si el número más grande es par o impar
paridad(numeroMax);