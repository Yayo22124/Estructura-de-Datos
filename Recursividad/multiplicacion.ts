// Multiplicacion de un Vector por un Escalar
// nA

// vector
const A = [1,2,3,4,5];
// funcion principal
const multiplicacion = (n:number, i:number = 0) => {
    let resultado:number [] = []
    // caso de cierre
    if (i >= A.length) return "Fin";

    resultado[i] = (n * A[i]);
    console.log(`${resultado[i]} = ${A[i]} * ${n}`);
    return multiplicacion(n, i+1)
}

multiplicacion(5)