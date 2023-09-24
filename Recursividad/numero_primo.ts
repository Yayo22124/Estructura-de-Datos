// Pedir el numero
let numero: number = prompt("Dame un número: ");
// llamar a la funcion
console.log(primos(numero));


function primos(n:number, n1:number = n-1) {
    // Caso de cierre
    if (n1 <= 2)  return `El número ${n} es primo.`;
    if ((n1 % n) == 0) return `El número ${n} no es primo.`;
    
    return primos(n, n1 - 1)
}
