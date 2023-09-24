// Suma por el método Ruso usando Recursividad
// A   B
// 14  26
// 7   52
// 3   104
// 1   208
// suma = 52 + 104 + 208

const sumaRusa = (A:number,B:number, suma = 0) => {
    let sumando = 0;
    
    if (A <= 1) {
        return suma;
    } else if (A % 2 != 0 ) {
        Math.floor(A);
        console.log(B);
        
        return (sumaRusa(A/2,B * 2, suma + B));
    } else {
        return (sumaRusa(A/2,B * 2, suma));
    }
}

console.log(sumaRusa(27,82));


