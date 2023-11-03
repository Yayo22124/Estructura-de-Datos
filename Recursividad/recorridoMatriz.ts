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
    [4,5,6,7]
];

const recorrerMatriz = (i:number = 0, j:number = 0) => {
    if (i >= 2 && j >= 3) {
        return "Fin";

    } else if (i >= 2) {
        return recorrerMatriz(0, j+1)
    } else {
        console.log(matriz[i][j]);
        return recorrerMatriz(i+1,j)
    }

    
}

recorrerMatriz()