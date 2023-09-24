// dividir entre 2 y escribir los residuos
// si el residuo es diferente de 0, se escribe 1
// si el residuo es 0, se escribe 0

// decimal: número a convertir
// bin: número convertido

const convert = (decimal:number, bin:number[] = []) => {

    if (decimal === 1) { //Caso de cierre
        return bin.join('');
    } else {
        const residuo = decimal % 2;
        bin.unshift(residuo);
        return convert(Math.floor(decimal/2), bin);
    }
}

const Decimal2Convert = 23519;
const resultado = convert(Decimal2Convert);

console.log(`El resultado de convertir ${Decimal2Convert} a binario es: ${resultado}`);

