// Z^n
// Siempre es Z^4 es decir
//    [0,1,2,3]
//      15,4
// 0,   1,  2,      3,
// 4,   5,  6,      7,
// 8,   9,  10,     11,
// 12,  13,   14,    15 Resultado = 3

const z = (n:number, a:number) => {
    if (n <= (a-1)) {
        return n;
    } else {
        return z(n - a,a);
    }
};

console.log(z(9, 6));

// 0,  1,  2,  3,  4,  5,
// 6,  7,  8,  9,  10, 11,
// 12, 13, 14, 15, 16, 17