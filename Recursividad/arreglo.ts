const arreglo = [1,2,3,4,5,6,7,8,9,10];
// const arreglo = [3,5,11];
// 1,3,5,7,9 = 25

function recorrerArreglo(i:number = 0, sumando:number = 0) {
    if (i >= arreglo.length) { // Caso de cierre (cuando i llegue a la longitud del array)
        return sumando
    } else if (arreglo[i] % 2 != 0) { 
        sumando += arreglo[i];
        return recorrerArreglo(i+1, sumando = sumando);
    } else {
        return recorrerArreglo(i+=1, sumando);
        
    }
}

console.log(recorrerArreglo());

