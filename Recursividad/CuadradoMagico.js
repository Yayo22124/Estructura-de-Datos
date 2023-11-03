let cuadradoMagico = [
    [2, 5, 6, 0],
    [1, 4, 10, 7],
    [3, 11, 12, 13],
    [14, 9, 8, 15]
];

let coordenadasNumero = []; // arreglo para guardar i y j

// Función para encontrar cualquier numero dentro de la matriz
function encontrarNumero(n, i = 0, j = 0) {
    if (cuadradoMagico[i][j] === n) {
        // Guardamos las coordenadas
        coordenadasNumero[0] = i;
        coordenadasNumero[1] = j;
        // console.log(`Las coordenadas del número: ${n} son: [${coordenadasNumero[0]}][${coordenadasNumero[1]}]`);
        return coordenadasNumero;
    } else if (j === (cuadradoMagico[i].length - 1)) {
        return encontrarNumero(n, i + 1, 0);
    } else {
        return encontrarNumero(n, i, j + 1);
    }
}

function imprimirMatriz() {
    for (let i = 0; i < cuadradoMagico.length; i++) {
        console.log(cuadradoMagico[i]);
    }
}

function moverNumero(numero, destinoI, destinoJ) {

    //                 posix [1] (j)
    // posix [0] (i) - [2, 5, 6, 7]
    // posix [0] (i) - [3, 4, 10, 0]
    // posix [0] (i) - [1, 11, 12, 13]
    // posix [0] (i) - [14, 9, 8, 15]

    // Encuentra la posición de 0
    const posicionCero = encontrarNumero(0);

    const ceroI = posicionCero[0];
    const ceroJ = posicionCero[1];

    // Caso base: 1 llega a la posición [0, 0]
    if (destinoI === 0 && destinoJ === 0) {
        console.log(`¡${numero} ha llegado a [0, 0]!`);
        imprimirMatriz();
        return;
    }

    // Mueve 0 a la posición adyacente que permitirá mover 1 hacia [0, 0]
    if (ceroI > destinoI) {
        cuadradoMagico[ceroI][ceroJ] = cuadradoMagico[ceroI - 1][ceroJ];
        cuadradoMagico[ceroI - 1][ceroJ] = 0;
        console.log(`Mover 0 de [${ceroI}, ${ceroJ}] a [${ceroI - 1}, ${ceroJ}]`);
        imprimirMatriz();
        moverNumero(numero, destinoI, destinoJ);
    } else if (ceroJ > destinoJ) {
        cuadradoMagico[ceroI][ceroJ] = cuadradoMagico[ceroI][ceroJ - 1];
        cuadradoMagico[ceroI][ceroJ - 1] = 0;
        console.log(`Mover 0 de [${ceroI}, ${ceroJ}] a [${ceroI}, ${ceroJ - 1}]`);
        imprimirMatriz();
        moverNumero(numero, destinoI, destinoJ);
    } else if (ceroI < destinoI) {
        cuadradoMagico[ceroI][ceroJ] = cuadradoMagico[ceroI + 1][ceroJ];
        cuadradoMagico[ceroI + 1][ceroJ] = 0;
        console.log(`Mover 0 de [${ceroI}, ${ceroJ}] a [${ceroI + 1}, ${ceroJ}]`);
        imprimirMatriz();
        moverNumero(numero, destinoI, destinoJ);
    } else if (ceroJ < destinoJ) {
        cuadradoMagico[ceroI][ceroJ] = cuadradoMagico[ceroI][ceroJ + 1];
        cuadradoMagico[ceroI][ceroJ + 1] = 0;
        console.log(`Mover 0 de [${ceroI}, ${ceroJ}] a [${ceroI}, ${ceroJ + 1}]`);
        imprimirMatriz();
        moverNumero(numero, destinoI, destinoJ);
    }
}

const posicionUno = encontrarNumero(1);

moverNumero(1, posicionUno[0], posicionUno[1]);
