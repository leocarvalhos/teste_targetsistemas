const faturamentoMensal = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
  };
  
  const valores = [
    { dia: 1, valor: 31490.7866 },
    { dia: 2, valor: 37277.9400 },
    { dia: 3, valor: 37708.4303 },
    { dia: 4, valor: 0.0000 },
    { dia: 5, valor: 0.0000 },
    { dia: 6, valor: 17934.2269 },
    { dia: 7, valor: 0.0000 },
    { dia: 8, valor: 6965.1262 },
    { dia: 9, valor: 24390.9374 },
    { dia: 10, valor: 14279.6481 },
    { dia: 11, valor: 0.0000 },
    { dia: 12, valor: 0.0000 },
    { dia: 13, valor: 39807.6622 },
    { dia: 14, valor: 27261.6304 },
    { dia: 15, valor: 39775.6434 },
    { dia: 16, valor: 29797.6232 },
    { dia: 17, valor: 17216.5017 },
    { dia: 18, valor: 0.0000 },
    { dia: 19, valor: 0.0000 },
    { dia: 20, valor: 12974.2000 },
    { dia: 21, valor: 28490.9861 },
    { dia: 22, valor: 8748.0937 },
    { dia: 23, valor: 8889.0023 },
    { dia: 24, valor: 17767.5583 },
    { dia: 25, valor: 0.0000 },
    { dia: 26, valor: 0.0000 },
    { dia: 27, valor: 3071.3283 },
    { dia: 28, valor: 48275.2994 },
    { dia: 29, valor: 10299.6761 },
    { dia: 30, valor: 39874.1073 }
  ];
  
  const valorTotal = valores.reduce((total, { valor }) => total + valor, 0);
  
  const percentualRepresentacao = Object.entries(faturamentoMensal).reduce((percentuais, [estado, valor]) => {
    percentuais[estado] = ((valor / valorTotal) * 100).toFixed(2);
    return percentuais;
  }, {});
  
  console.log(percentualRepresentacao);
  