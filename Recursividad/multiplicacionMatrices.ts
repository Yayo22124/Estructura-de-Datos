const A = [
    [1,2,3],
    [4,5,6]
]

const B = [
    [7,8,9],
    [10,11,12],
    [13,14,15]
]

const recorrerMatrices = (i = 0, j = 0, k = 0) => {
    if (i>=2) {
        
    } else if (j >= 2) {
        
        console.log(`[${A[i][k]}][${B[k][j]}]`); 
        return recorrerMatrices(i + 1, 0, 0)
    } else if (k >= 2) { 
        console.log(`[${A[i][k]}][${B[k][j]}]`); 
        return recorrerMatrices(i, j + 1, 0)
    } else {
        console.log(`[${A[i][k]}][${B[k][j]}]`); 
        return recorrerMatrices(i,j,k + 1)
    }
}

recorrerMatrices()