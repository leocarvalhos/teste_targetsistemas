function ehQuadradoPerfeito(numero) {
    if (numero < 0) return false;
    const raiz = Math.sqrt(numero);
    return raiz === Math.floor(raiz);
  }
  
  function verificarSeNumeroEhFibonacci(numero) {
    const expressao1 = 5 * numero * numero + 4;
    const expressao2 = 5 * numero * numero - 4;
    return ehQuadradoPerfeito(expressao1) || ehQuadradoPerfeito(expressao2);
  }
  
  // Testes
  const numerosTeste = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657];
  
  numerosTeste.forEach(numero => {
    if (verificarSeNumeroEhFibonacci(numero)) {
      console.log(`${numero} pertence à sequência de Fibonacci.`);
    } else {
      console.log(`${numero} não pertence à sequência de Fibonacci.`);
    }
  });
  