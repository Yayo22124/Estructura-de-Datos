// Suma de dos vectores
const arreglo1 = [5,5,5,5,1];
const arreglo2 = [1,2,3,4,1];

// 5+1 = 6 
// 5+2 = 7
// 5+3 = 8
// 5+4 = 9

function sumaVectores(i:number = 0, suma = []) {


    if (i >= arreglo1.length) {
        return suma;
    } else {
        suma[i] = arreglo1[i] + arreglo2[i];
        
        return sumaVectores(i+=1,suma)
    }
    
}

console.log(sumaVectores());
