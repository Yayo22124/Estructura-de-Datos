// Recorrer una matriz usando Recursividad
// por convención se selen usar:
// i: para filas
// j: para columnas

//      j0   j1   j2   j3
// i0    0    1    2    3   0i
// i1    4    5    6    7   1i
//      j0   j1   j2   j3


const matriz = [
    [0,1,2,3],
    [4,5,6,7],
    [1,1,1,1]
];

function recorrerMatriz( n1:number, i:number = 0, j:number = 0) {
    let resultado:number[][] = [[],[],[]];

    if (i >= 3) {
        return "Fin";

    } else if (j >= 3) {
        return recorrerMatriz(n1,i+1, j = 0)
    } else {
        resultado[i][j] = matriz[i][j] * n1;
        console.log(`${resultado[i][j]} = ${matriz[i][j]} + ${n1}`);

        return recorrerMatriz(n1,i,j+1)
    }

    
}

recorrerMatriz(5)