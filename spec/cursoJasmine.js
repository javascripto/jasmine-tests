// Curso de testes unitários com Jasmine
// http://kazale.com/

// BDD - Behavior Driven Development

// Ultima aula vista: https://www.udemy.com/aprenda-testes-unitarios-com-jasmine-javascript/learn/v4/t/lecture/6306626?start=0

// Site oficial do Jasmine:
// https://jasmine.github.io/

// Download jasmine standalone:
// https://github.com/jasmine/jasmine/releases


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

// describe = Suite
// it       = specs - especificação
// expect   = expectation - expectativa
// toBe     = matcher - comparador
