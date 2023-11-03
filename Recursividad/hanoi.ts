function torreHanoi(n: number, origen: number, auxiliar: number, destino: number): [number, number][] {
    const movimientos: [number, number][] = [];

    if (n === 1) {
        movimientos.push([origen, destino]);
    } else {
        movimientos.push(...torreHanoi(n - 1, origen, destino, auxiliar));
        movimientos.push([origen, destino]);
        movimientos.push(...torreHanoi(n - 1, auxiliar, origen, destino));
    }

    return movimientos;
}

function mostrarTorres(movimientos: [number, number][], n: number): void {
    const torres: number[][] = [[], [], []];

    for (let i = n; i > 0; i--) {
        torres[0].push(i);
    }

    console.log("ESTADO INICIAL:");
    for (let j = n - 1; j >= 0; j--) {
        for (let k = 0; k < 3; k++) {
            const disco = torres[k][j] !== undefined ? torres[k][j] : 0;
            process.stdout.write(`[${disco}]`);
        }
        console.log();
    }
    console.log();

    for (let i = 0; i < movimientos.length; i++) {
        const [origen, destino] = movimientos[i];
        torres[destino].push(torres[origen].pop()!);

        console.log(`MOVIMIENTO ${i + 1}:`);

        for (let j = n - 1; j >= 0; j--) {
            for (let k = 0; k < 3; k++) {
                const disco = torres[k][j] !== undefined ? torres[k][j] : 0;
                process.stdout.write(`[${disco}]`);
            }
            console.log();
        }
        console.log();
    }
}

const movimientos = torreHanoi(3, 0, 1, 2);
mostrarTorres(movimientos, 3);
