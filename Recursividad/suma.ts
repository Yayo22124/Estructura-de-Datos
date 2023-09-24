// Realiza un programa que realice la suma de los números enteros positivos

// Pedir el numero

function sumaPares(numero: number, suma = 0) {
    // Verificar que el número sea par
    if (numero == 2) {   
        return suma + 2;
    } else if (numero % 2 == 0) 
    {
        return sumaPares(numero - 2, suma += numero);
    } else
    {
        console.log(`El número ${numero} es impar`);
    }
    
}
console.log(sumaPares(10));