describe('toBeTruthy, toBeFalsy', () => {
  const valoresNaoVerdadeiros = [0, false, '', undefined, null, NaN];

  valoresNaoVerdadeiros.forEach(valor => {
    it(`Deve validar o valor de "${valor}" como não verdadeiro`, () => {
      expect(valor).not.toBeTruthy();
    });
  });

  valoresNaoVerdadeiros.forEach(valor => {
    it(`Deve validar o valor de "${valor}" como falso`, () => {
      expect(valor).toBeFalsy();
    });
  });
});
