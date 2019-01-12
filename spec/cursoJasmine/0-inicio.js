// Curso de testes unitários com Jasmine
// http://kazale.com/

// BDD - Behavior Driven Development

// Ultima aula vista: https://www.udemy.com/aprenda-testes-unitarios-com-jasmine-javascript/learn/v4/t/lecture/6306626?start=0

// Site oficial do Jasmine:
// https://jasmine.github.io/

// Download jasmine standalone:
// https://github.com/jasmine/jasmine/releases




// describe = Suite
// it       = specs - especificação
// expect   = expectation - expectativar
// toBe     = matcher - comparador

describe('Comparadore toBe', () => {
  it('Deve validar o uso do toBe', () => {
    expect(true).toBe(true);
  });
  it('Deve comparar dois objetos diferentes', () => {
    expect({}).not.toBe({});
  });

});

describe('Comparador toEqual', () => {
  it('Deve testar o toEqual com dois objetos diferentes porem de mesmo valor', () => {
    expect({valor: true}).toEqual({valor: true});
  });
});

describe('Comparador toMatch', () => {
  it('Deve validar o uso do toMatch usado com expressões regulares', () => {
    const texto      = 'meu nome é fulano';
    const formatoCPF = /\d{3}\.\d{3}\.\d{3}-\d{2}/;

    expect(texto).toMatch('fulano');
    expect(texto).toMatch(/FULANO/i);
    expect('270.004.800-84').toMatch(formatoCPF);
    expect('A70.004.800-84').not.toMatch(formatoCPF);
  });
});

