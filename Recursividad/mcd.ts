// Función para calcular el maximo común divisor dado 2 números 

function max_comun_div(n1: number, n2: number, divisor = 2): number {
  // Caso base: Si ambos números son 1, el max_comun_div es 1
  if (n1 == 1 && n2 == 1) {
    return 1;
  } else {
    // Verificar si ambos números son divisibles por el divisor actual divisor
    if (n1 % divisor == 0 && n2 % divisor == 0) {
      // Llamada recursiva dividiendo n y n1 por divisor y multiplicando el resultado por divisor
      return divisor * max_comun_div(n1 / divisor, n2 / divisor, divisor);
    } else if (n1 % divisor == 0) {
      // Llamada recursiva dividiendo n por divisor
      return max_comun_div(n1 / divisor, n2, divisor);
    } else if (n2 % divisor == 0) {
      // Llamada recursiva dividiendo n1 por divisor
      return max_comun_div(n1, n2 / divisor, divisor);
    } else {
      // Si ninguno de los casos anteriores se cumple, incrementar divisor y llamar recursivamente
      return max_comun_div(n1, n2, divisor + 1);
    }
  }
}

// Llamada a la función max_comun_div con los valores dados, e imprimir el resultado
console.log(max_comun_div(40, 60));
