class Calculadora {
  somar(n1, n2) {
    return n1 + n2;
  }
  subtrair(n1, n2) {
    return n1 - n2;
  }
  multiplicar(n1, n2) {
    return n1 * n2;
  }
  dividir(n1, n2) {
    return n1 / n2;
  }
}

describe('Calculadora Básica', () => {
  let c;

  beforeAll(() => {
    c = new Calculadora();
  });

  it('Deve somar dois numeros', () => {
    expect(c.somar(3, 7)).toBe(10);
  });
  it('Deve subtrair n2 de n1', () => {
    expect(c.subtrair(9, 4)).toBe(5);
  });
  it('Deve multiplicar dois numeros', () => {
    expect(c.multiplicar(7, 8)).toBe(56);
  });
  it('Deve dividir n1 por n2', () => {
    expect(c.dividir(25, 5)).toBe(5);
  });
});
