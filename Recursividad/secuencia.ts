const secuencia = (n:number) => {
    if (n < 11) {
        console.log(`${n}`);
        secuencia(n+1);
        if (n!=10) {
            console.log(`${n}`);
        }
    }
}

secuencia(1);