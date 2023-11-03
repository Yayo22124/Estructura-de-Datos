// Realizar un programa que multiplique un arreglo por un escalar
// El resultado de la multiplicacion se le sumará a otro arreglo
// nA + B

// vectores
const A = [1,2,3,4];
const B = [1,2,3,4];

function calcula(n:number, i:number = 0) {
    // vector resultante
    let resultado:number [] = [];

    if (i >= A.length) {
        return "Fin"
    }
    resultado[i] = (n * A[i]) + B[i];
    console.log(`${resultado[i]} = (${n} * ${A[i]}) + ${B[i]}`);
    return calcula(n, i+1)
}

calcula(5);