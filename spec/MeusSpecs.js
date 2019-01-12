
const Calculadora = {
  somar(valor1, valor2) {
    return valor1 + valor2;
  }
};

describe('Descrição da suite de testes', () => { // Suíte
  it('Spec - Especificação dos testes - resultados esperados', () => { // Spec - Especificação
    expect(Calculadora.somar(6, 9)).toBe(15); // Expectations e Matches - Expectativas
  });
  it('deve funcionar a matematica básica de 1 + 1', function() {
    expect(1 + 1).toBe(2);
  });
});


// Matches:
// toBe, .not.toBe, toEqual, toMatch, toBeDefined, toBeUndefined, 
// toBeNull, toBeTruthy, toBeFalsy, toContain,
// toBeLessThan, toBeGreaterThan, toThrow, toThrowError

// usar .not antes de um match inverte a comparação como o operador !

(function(){ // As suítes foram envolvidas em uma IIFE para colapsar o texto no editor
  // toBe faz a comparação de valor e tipo como o operador ===
  describe('Suíte de testes do tópico 5.1', () => {
    var valorBooleano = true;
    var valorBooleanoCopia = valorBooleano;
    var valorBooleanoTexto = 'true';
    var obj1 = {valor: valorBooleano};
    var obj2 = {valor: valorBooleano};

    it('deve validar o uso do match \'toBe\'', () => {
      expect(valorBooleano).toBe(true);
      expect(valorBooleano).toBe(valorBooleanoCopia);
      expect(valorBooleano).not.toBe(valorBooleanoTexto);
      expect(valorBooleanoTexto).toBe('true');
      expect(obj1).not.toBe(obj2);
    });
  });
  // toEqual faz a comparação entre dois elementos.
  // Compara apenas valor, mas não o tipo. Indicado para comparar valores literais
  describe('Suíte de teste do tópico 5.2', function() {
    var valorBooleano = true;
    var valorBooleano2 = true;
    var valorBooleanoCopia = valorBooleano;
    var valorBooleanoTexto = 'true';
    var obj1 = {valor: valorBooleano};
    var obj2 = {valor: valorBooleano};

    it('deve validar o uso do match \'toEqual\'', () => {
      expect(valorBooleano).toEqual(true);
      expect(valorBooleano).toEqual(valorBooleano2);
      expect(valorBooleanoCopia).toEqual(valorBooleano);
      expect(valorBooleano).not.toEqual(valorBooleanoTexto);
      expect(valorBooleanoTexto).toEqual('true');
      expect(obj1).toEqual(obj2);
    })
  });
  // toMatch faz comparações utilizando regexp
  describe('Suíte de teste do tópico 5.3', () => {
    var textoComparar = 'Curso de testes com Jasmine';

    it('deve validar o uso do match \'toMatch\'', () => {
      expect(textoComparar).toMatch(/Jasmine/);
      expect(textoComparar).toMatch("Jasmine");
      expect(textoComparar).toMatch(/jasmine/i);
      expect(textoComparar).not.toMatch(/Javascript/);
      expect('14/12/2016').toMatch(/^\d{2}\/\d{2}\/\d{4}/);
    })
  });
  // toBeDefined/toBeUndefined - faz a comparação de um elemento como sendo ou não undefined
  describe('Suíte de teste dos tópicos 5.4 e 5.5', () => {
    var numero = 10;
    var texto;
    var obj = {valor: 10};

    it('deve validar o uso do match \'toBeDefined\'', () => {
      expect(numero).toBeDefined();
      expect(texto).not.toBeDefined();
      expect(obj.valor).toBeDefined();
      expect(obj.mensagem).not.toBeDefined();
      expect(texto).toBeUndefined();
    });
  });
  // toBeNull - faz comparação de um elemento como sendo null
  // null != undefined. null é um tipo, undefined indica variavel não definida
  describe('Suíte de teste do tópico 5.6', () => {
    var objeto = null;
    var texto;
    var numero = 10;

    it('deve validar o uso do matcher \'toBeNull\'', () => {
      expect(objeto).toBeNull();
      expect(numero).not.toBeNull();
      expect(texto).not.toBeNull();
      expect(objeto).not.toEqual(texto);
    });
  });
  // toBeTruthy - compara um objeto / variável como tendo valor válido.
  // toBeFalsy - compara um objeto /variavel como tento valor invalido
  // valores inválidos = (false, 0, undefined, null, NaN, "")
  describe('Suíte de testes dos tópicos 5.7 e 5.8', () => {
    var objeto = {valor: 123};
    var texto;
    var numero = 10;

    it('deve validar o uso do matcher \'toBeTruthy\'', () => {
      expect(objeto).toBeTruthy();
      expect(numero).toBeTruthy();
      expect(texto).not.toBeTruthy();
      expect(true).toBeTruthy();
      expect(false).not.toBeTruthy();
      expect(false).toBeFalsy();
    });
    it('deve validar o uso do matcher \'toBeFalsy\'', () => {
      expect(false).toBeFalsy();
      expect("").toBeFalsy();
      expect(0).toBeFalsy();
      expect(undefined).toBeFalsy();
      expect(null).toBeFalsy();
      expect(NaN).toBeFalsy();
      expect(numero).not.toBeFalsy();
      expect("false").not.toBeFalsy();
    });
  });
  // toContain - Faz busca por determinado item em um array, ou substring em uma string
  // Não suporta regexp
  describe('Suíte de testes do tópico 5.9', () => {
    var nomes = ['Fulano', 'Cicrano', 'Beltrano'];
    var nomesTexto = 'Fulano Beltrano Cicrano';

    it('deve validar o uso do matcher \'toContain\'', () => {
      expect(nomes).toContain('Cicrano');
      expect(nomesTexto).toContain('Fulano');
      expect(nomesTexto).toContain('Bel');
      expect(nomes).not.toContain('Maria');
      expect(nomes).not.toContain('cicrano');
    });
  });
  // toBeLessThan - compara se um valor numérico é menor do que outro valor
  // toBeGreaterThan - compara se um valor numérico é maior do que outro
  describe('Suíte de testes dos tópicos 5.10', () => {
    const PI = 3.1415;
    var numero = 2;

    it('deve validar o uso do matcher \"toBeLessThan\'', () => {
      expect(numero).toBeLessThan(PI);;
      expect("1.2").toBeLessThan(PI);;
      expect(5).not.toBeLessThan(PI);;
      expect(PI).not.toBeLessThan(PI);;
    });

    it('deve validar o uso do matcher \"toBeGreaterThan\'', () => {
      expect(PI).toBeGreaterThan(numero);
      expect("3.2").toBeGreaterThan(PI);
      expect(2).not.toBeGreaterThan(PI);
      expect(PI).not.toBeGreaterThan(PI);
      
    });
  });
  // toThrow - Verifica se uma exceção é lançada por um método
  // Não realiza a validação em detalhe nem o tipo da exceção lançada, apenas
  // certifica que um erro ocorreu na execução da função.
  describe('Suíte de testes do tópico 5.12', () => {
    var comErro = function() {
      return numero * 10;
    };
    var semErro = function(numero) {
      return numero * 10;
    };

    it('deve validar o uso do matcher \'toThrow\'', function() {
      expect(comErro).toThrow();
      expect(semErro).not.toThrow();
    });
  });
  // toThrowError - Verifica se uma exceção é lançada por um método
  // Valida o tipo da exceção lançada e mensagem de erro contida nela
  // Suporta expressão regular na validação da mensagem de erro
  // Deve ser utilizada para maior controle do erro lançado
  describe('Suíte de testes do tópico 5.13', () => {
    var calcularDobro = function(numero) {
      if(numero <= 0)
        throw new TypeError('O número deve ser maior que 0');
      return numero * numero;
    };

    it('deve validar o uso do matcher \'toThrowError\'', () => {
      expect(() => calcularDobro(0)).toThrowError();
      expect(() => calcularDobro(0)).toThrowError('O número deve ser maior que 0');
      expect(() => calcularDobro(0)).toThrowError(/maior que 0/);
      expect(() => calcularDobro(0)).toThrowError(TypeError);
      expect(() => calcularDobro(0)).toThrowError(TypeError, 'O número deve ser maior que 0');
      expect(calcularDobro).not.toThrowError();
    });
  });
})();

// fail() - Falha manual - pemrite interromper umt este lançando um erro
// O jasmine possui a função 'fail' para falhar manualmente  um teste
// Utilizamos a falha manual para certificar qu uma operação  não desejada não seja executada
describe('Testa a função \'fail\' de falha manual', () => {
  var operacao = (deveExecutar, callback) => {
    if(deveExecutar) callback();
  };

  it('não deve executar a função de callback', () => {
    operacao(false, function() {
      fail('Função de callback foi executada');
    });
    expect().toBe()
  });
});

// Executando código antes ou depois do teste
// Jasmine permite executar código antes ou depois
// de um teste ou de uma suíte de testes utilizando
// funções especiais: beforeEach, afterEach, beforeAll, AfterAll

describe('Suíte de testes do tópico 7.1', () => {
  var contador = 0;

  beforeEach(() => {
    contador++;
  });

  it('deve exibir o contador com valor 1', () => {
    expect(contador).toEqual(1);
  });

  // O teste abaixo pode falhar pois cada expectation é executada em ordem aleatória
  // it('deve exibir o contador com valor 2', () => {
  //   expect(contador).toEqual(2);
  // });
});
describe('Suíte de testes do tópico 7.2', () => {
  var contador = 0;

  beforeEach(() => {
    contador++;
  });

  afterEach(() => {
    contador = 0;
  });

  it('deve exibir o contador com valor 1', () => {
    expect(contador).toEqual(1);
  });

  it('deve exibir o contador com valor 1', () => {
    expect(contador).toEqual(1);
  });
});
describe('Suíte de testes do tópico 7.3', () => {
  var contador;

  beforeAll(()  => contador = 10);
  beforeEach(() => contador++);

  it('deve exibir o contador com valor 11', () => {
    expect(contador).toEqual(11);
  });
  // tambem pode falhar pela aleatoriedade dos expectations
  // it('deve exibir o contador com valor 12', () => {
  //   expect(contador).toEqual(12);
  // });
});
describe('Suíte de testes do tópico 7.4', () => {
  var contador;

  beforeAll(()  => contador = 10);
  afterAll(() => contador = 0);

  it('deve exibir o contador com valor 12', () => {
    expect(contador).toEqual(10);
  });
  it('deve exibir o contador com valor 12', () => {
    expect(contador).toEqual(10);
  });
});

// Aninhando suítes de testes
// Suítes podem ser aninhadas e conter outras suítes dentro dela
// As funções especiais como o "beforeEach" ou "afterAll" serão 
// executadas antes e depois de todos os testes
// Tome cuidado ao aninhas supites para não tornar o teste complexo

describe('Suíte de testes do tópico 8', () => {
  var contadorExterno = 0;

  beforeEach(() => contadorExterno++);

  it('deve ter incrementado  contador externo para 1', () => {
    expect(contadorExterno).toEqual(1);
  });

  // Os testes estão em ordem aleatória, por isso o de baixo foi comentado
  // describe('Suíte aninhada à anterior', () => {
  //   var contadorInterno = 1;

  //   beforeEach(() => contadorInterno++);

  //   it('deve conter o valor \'2\' para ambos contadores', () => {
  //     expect(contadorInterno).toEqual(contadorExterno);
  //   });
  // })
});

// Desabilitando Suítes e testes
// Uma supite pode ser desabilitada a qualquer 
// momento renomeando a função com um 'x' no inicio
// describe passa a ser xdescribe, it passa a ser xit
(() => {
  xdescribe('Suíte desabilitada devido ao uso do \'x\' do \'xdescribe\'', () => {
    var contador = 0;

    beforeEach(() => contador++);

    it('deve garantir que o contado foi incrementado em i', () => {
      expect(contador).toEqual(1);
    });
  });

  xit('teste desabilitado devido ao uso da funcao \'xit\'', () => {
    expect(true).toBe(false);
  });
  // Testes também serão considerados inativos caso só possuam a descrição como argumento
  it('teste desabilitado por não possuir função de callback definida');
  // Tambem é possível usar a função "pending" dentro do teste para desativa-lo
  it('teste desabilitado devido ao uso da função \'pending\'', () => {
    expect(true).toBe(false);
    pending('teste ainda pendente');
  });
})();

// Spies - São objetos falsos usados quando queremos manipular algum retorno que não faça parte do teste em si
// São usados para isolar somente o bloco de código que estamos testando
// Só podem ser criados dentro de blocos 'describe' e 'it'
// Spies são removidos ao termino da execução da suíte
// Operações associadas ao uso de Spies: spyOn, toHaveBeenCalled, toHaveBeenCalledTimes, toHaveBeenCalledWith,
// and.callThrough, and.returnValue, and.returnValues, and.callFake, and.throwError,
// calls.any, calls.count, calls.argsFor, calls.allArgs, calls.all,
// calls.mostRecent, calls.first, calls.reset
// createSpy, createSpyObj
(() => {
  // spyOn, toHaveBeenCalled, toHaveBeenCalledTimes, toHaveBeenCalledWith
  describe('Suíte de testes dos tópicos 11.1 ao 11.4', () => {
    var calculadora = {
      somar(n1, n2) {
        return n1 + n2;
      }
    };

    beforeEach(() => {
      // spyOn - Serve para criar  um mock (objeto falso) a ser utilizado nos testes.
      // um objeto spy contem uma série de atributos
      // A função spyOn recebe como parametros o nome do objeto e do método a serem utilizados como mock
      spyOn(calculadora, 'somar');
    });

    // toHaveBeenCalled - serve para informar se um método do spy foi executado ao menos uma vez. 
    // toHaveBeenCalled Não possui parâmetros.
    it('deve validar o uso do \'toHaveBeenCalled\'', () => {
      calculadora.somar(1, 1); // Não executa realmente o método
      expect(calculadora.somar).toHaveBeenCalled();
    });

    // toHaveBeenCalledTimes - serve para verificar quantas vezes um método do spy foi chamado.
    // Recebe como parâmetro o numero de execuções a ser verificado
    it('deve validar o uso do \'toHaveBeenCalledTimes\'', () => {
      calculadora.somar(1, 1);
      calculadora.somar(2, 2);
      expect(calculadora.somar).toHaveBeenCalledTimes(2);
    });

    // toHaveBeenCalledWith - serve para verificar com quais parâmetros um método do spy foi chamado.
    // Recebe como parametro os valores da chamada do método spy, separados por virgula
    it('deve validar o uso do \'toHaveBeenCalledWith\'', () => {
      calculadora.somar(1, 1);
      calculadora.somar(2, 2);
      expect(calculadora.somar).toHaveBeenCalledWith(1, 1);
      expect(calculadora.somar).toHaveBeenCalledWith(2, 2);
    });
  });
  // and.callThrough
  describe('Suíte de testes dos tópicos 11.5', () => {
    var calculadora = {
      somar(n1, n2) {
        return n1 + n2;
      },
      subtrair(n1, n2) {
        return n1 - n2;
      }
    };
    // and.callThrough - serve para informar ao spy que o método original deve ser executado
    // and.callThrough deve ser aplicado ao objeto spy.
    // Neste caso o método original será executado, e todos os recursos do spy serão 
    // mantidos e estarão disponíveis para verificação.
    beforeEach(() => {
      spyOn(calculadora, 'somar').and.callThrough();
      spyOn(calculadora, 'subtrair');
    });

    it('deve validar o uso do \'and.callThrough\'', () => {
      expect(calculadora.somar(1, 1)).toEqual(2);
      expect(calculadora.subtrair(2, 2)).toBeUndefined(); // deve ser undefined pois spies não executam realmente o método
      expect(calculadora.somar).toHaveBeenCalledTimes(1);
    });
  });
  // and.returnValue
  describe('Suíte de testes do tópico 11.6', () => {
    var calculadora = {
      somar(n1, n2) {
        return n1 + n2;
      }
    };
    // and.returnValue - Serve para informar ao spy o valor de retorno de determinado método
    // and.returnValue deve ser aplicado ao objeto spy.
    beforeEach(() => {
      spyOn(calculadora, 'somar').and.returnValue(10); // força o valor de retorno do método
    });

    it('deve validar o uso do \'and.returnValue\'', () => {
      expect(calculadora.somar(5, 2)).toEqual(10); // aindaque o retorno real seja 7, o valor retornado forçadamente é 10 
      expect(calculadora.somar).toHaveBeenCalled();
    });
  });
  // and.returnValues
  describe('Suíte de testes do tópico 11.7', () => {
    var calculadora = {
      somar(n1, n2) {
        return n1 + n2;
      }
    };

    // and.returnValues - serve para informar ao spy quais são os valores a serem retornados por chamada
    // and.returnValues aceita como parâmetro um ou mais valores, separados por virgula
    // Se o numero de chamadas for maior do que o de valores a serem retornados, será retornado 'undefined'
    // and.returnValues deve ser aplicado ao objeto spy
    beforeEach(() => {
      spyOn(calculadora, 'somar').and.returnValues(10, 20);
    });

    it('deve validar o uso do \'and.returnValues\'', () => {
      expect(calculadora.somar(5, 2)).toEqual(10);
      expect(calculadora.somar(5, 2)).toEqual(20);
      expect(calculadora.somar(5, 2)).toBeUndefined(20);
      expect(calculadora.somar).toHaveBeenCalledTimes(3);
    });
  });
  // and.callFake
  describe('Suíte de testes do tópico 11.8', () => {
    var calculadora = {
      somar(n1, n2) {
        return n1 + n2;
      }
    };
    // and.callFake - serve para definir uma nova implementação para um método de um spy
    // and.callFake deve ser aplicado ao objeto spy
    // and.callFake recebe como parâmetro uma função com a nova implementação a ser executada quando o método for chamado
    beforeEach(() => {
      spyOn(calculadora, 'somar').and.callFake((n1, n2) => {
        return n1 * n2;
      });
    });

    it('deve validar o uso do \'and.callFake\'', () => {
      expect(calculadora.somar(2, 5)).toEqual(10);
      expect(calculadora.somar).toHaveBeenCalled();
    });
  });
  // and.throwError
  describe('Suíte de testes do tópico 11.9', () => {
    var calculadora = {
      somar(n1, n2) {
        return n1 + n2;
      }
    };
    // and.throwError - serve para informar ao apy que determinado método deve lançar um erro ao ser executado.
    // and.throwError deve ser aplicado ao objeto spy
    // and.throwError recebe como parâmetro uma string contendo a mensagem de erro a ser lançada
    beforeEach(() => {
      spyOn(calculadora, 'somar').and.throwError('valores inválidos');
    });

    it('deve validar o uso do \'and.throwError\'', () => {
      expect(() => calculadora.somar(2, 5)).toThrowError('valores inválidos');
      expect(calculadora.somar).toHaveBeenCalled();
    });
  });
  // calls.any
  describe('Suíte de testes do tópico 11.10', () => {
    var calculadora = {
      somar(n1, n2) {
        return n1 + n2;
      }
    };
    // Todo spy possui um atributo 'calls' com informações sobre suas chamadas
    // O 'calls.any' serve para indicar se o método do spy foi chamado ao menos uma vez
    // Ele nao recebe parâmetros e retorna um valor booleano se ocorreu ou não  uma chamada ao método do spy
    beforeEach(() => {
      spyOn(calculadora, 'somar');
    });

    it('deve validar o uso do \'calls.any\'', () => {
      expect(calculadora.somar.calls.any()).toBeFalsy();
      calculadora.somar(1, 1);
      expect(calculadora.somar.calls.any()).toBeTruthy();
    });
  });
  // calls.count
  describe('Suíte de testes do tópico 11.11', () => {
    var calculadora = {
      somar(n1, n2) {
        return n1 + n2;
      }
    };
    // O 'calls.count' armazena e retorna o número de vezes que um método do spy foi chamado
    // Ele não possui parâmetros e retorna o número de chamadas do método
    beforeEach(() => {
      spyOn(calculadora, 'somar');
    });

    it('deve validar o uso do \'calls.count\'', () => {
      calculadora.somar(1, 1);
      calculadora.somar(2, 2);
      expect(calculadora.somar.calls.count()).toEqual(2);
    });
  });
  // calls.argsFor
  describe('Suíte de testes do tópico 11.12', () => {
    var calculadora = {
      somar(n1, n2) {
        return n1 + n2;
      }
    };
    // O 'calls.argsFor' armazena e retorna uma lista (array) 
    // contendo os parâmetros utilizados em cada chamada do método de um spy
    // Ele recebe como parâmetro o índice da chamada a ser retornada
    // É bastante útil para validar se um método foi chamado com os parâmetros corretos
    beforeEach(() => {
      spyOn(calculadora, 'somar');
    });

    it('deve validar o uso do \'calls.argsFor\'', () => {
      calculadora.somar(1, 1);
      calculadora.somar(2, 2);
      expect(calculadora.somar.calls.argsFor(0)).toEqual([1, 1]);
      expect(calculadora.somar.calls.argsFor(1)).toEqual([2, 2]);
    });
  });
  // calls.allArgs
  describe('Suíte de testes do tópico 11.13', () => {
    var calculadora = {
      somar(n1, n2) {
        return n1 + n2;
      }
    };
    // O 'calls.allArgs' retorna uma lista com todos os argumentos de todas as chamadas aos métodos de um spy 
    // Ele não recebe nenhum argumento como parâmetro.
    // Prefira utilizar o 'calls.argFor' quando precisar verificar um item em específico
    beforeEach(() => {
      spyOn(calculadora, 'somar');
    });

    it('deve validar o uso do \'calls.allArgs\'', () => {
      calculadora.somar(1, 1);
      calculadora.somar(2, 2);
      expect(calculadora.somar.calls.allArgs()).toEqual([[1, 1], [2, 2]]);
    });
  });
  // calls.all
  describe('Suíte de testes do tópico 11.14', () => {
    var calculadora = {
      somar(n1, n2) {
        return n1 + n2;
      }
    };
    // O 'calls.all' retorna todas as informações  de chamada de um método do spy
    // As informações armazenadas são o tipo de objeto (object), 
    // os parâmetros de chamada (args), e os valores de retorno (returnValue).
    // Os itens acima são agrupadps em uma lista, e são referenciados por número de chamada
    beforeEach(() => {
      spyOn(calculadora, 'somar');
    });

    it('deve validar o uso do \'calls.all\'', () => {
      calculadora.somar(1, 1);
      var retorno = calculadora.somar.calls.all();

      expect(retorno[0].object).toEqual(calculadora);
      expect(retorno[0].args).toEqual([1, 1]);
      expect(retorno[0].returnValue).toBeUndefined();
    });
  });
  // calls.mostRecent, calls.first
  describe('Suíte de testes dos tópicos 11.15 e 11.16', () => {
    var calculadora = {
      somar(n1, n2) {
        return n1 + n2;
      }
    };
    beforeEach(() => {
      spyOn(calculadora, 'somar');
    });

    it('deve validar o uso do \'calls.mostRecent\' e do \'calls.first\'', () => {
      calculadora.somar(1, 1);
      calculadora.somar(2, 3);

      var ultimaChamada = calculadora.somar.calls.mostRecent();
      var primeiraChamada = calculadora.somar.calls.first();
      
      // O 'calls.mostRecent' retorna os dados da última chamada do método do spy
      // Seria o mesmo que acessar o último elemento da lista contida em 'calls.all'
      expect(ultimaChamada.object).toEqual(calculadora);
      expect(ultimaChamada.args).toEqual([2, 3]);
      expect(ultimaChamada.returnValues).toBeUndefined();

      // O 'calls.first' retorna os dados da primeira chamada do método do spy
      // Seria o mesmo que acessar o primeiro elemento da lista contida em 'calls.all'
      expect(primeiraChamada.object).toEqual(calculadora);
      expect(primeiraChamada.args).toEqual([1, 1]);
      expect(primeiraChamada.returnValues).toBeUndefined();
    });
  });
  // calls.reset
  describe('Suíte de testes do tópico 11.17', () => {
    var calculadora = {
      somar(n1, n2) {
        return n1 + n2;
      }
    };
    beforeEach(() => {
      spyOn(calculadora, 'somar');
    });
    // calls.reset - Serve para limpar a lista com os dados das chamadas dos métodos de um spy
    // Pode ser útil quando tiver suítes aninhadas ou mesmo precisar restaurar o valor padrão das chamadas
    it('deve validar o uso do \'calls.reset\'', () => {
      calculadora.somar(1, 1);
      expect(calculadora.somar.calls.any()).toBeTruthy();
      calculadora.somar.calls.reset();
      expect(calculadora.somar.calls.any()).toBeFalsy();
    });
  });
  // createSpy
  describe('Suíte de testes do tópico 11.18', () => {
    // createSpy é uma função global javascript do Jasmine
    // Serve para criar um spy do zero
    // Ele possui todos os atributos de um objeto spy comum
    // Recebe como parâmetro o nome da função a ser criado o spy
    // Deve ser utilizado quando precisa de um objeto que não se tem acesso direto a ele
    // createSpy possui a  limitação de não permitir implementar o método declarado, 
    // assim como somente permite a criação de um método.
    var somar = jasmine.createSpy('somar');

    it('deve validar o uso do \'createSpy\'', () => {
      somar(1, 2);
      expect(somar).toHaveBeenCalled();
      expect(somar).toHaveBeenCalledWith(1, 2);
      expect(somar.calls.mostRecent().args[0]).toEqual(1);
    });
  });
  // createSpyObj
  describe('Suíte de testes do tópico 11.19', () => {
    // createSpyObj é uma função global javascript do Jasmine
    // Serve para criar um objeto spy do zero
    // Ele possui todos os atributos de um objeto comum
    // Recebe como parâmetro o nome do objeto a ser 
    // criado, assim como seus mpetodos em formato de  array
    // Deve ser utilizado quando precisa de um 
    // objeto que não se tem acesso direto a ele.
    // createSpyObj permite a utilização de 
    // todos os elementos 'and.' estudados anteriormente.
    var calculadora = jasmine.createSpyObj('calculadora', [
      'somar',
      'subtrair'
    ]);

    calculadora.somar.and.returnValue(10);

    it('deve validar o uso do \'createSpyObj\'', () => {
      expect(calculadora.somar(1, 2)).toEqual(10);
      expect(calculadora.somar).toHaveBeenCalled();
      expect(calculadora.somar).toHaveBeenCalledWith(1, 2);
      expect(calculadora.somar.calls.mostRecent().args[0]).toEqual(1);
    });
  });
})();

// Objeto 'jasmine' página 58


(() => {
  // Palavras chave:
  // describe, it, expect
  // xdescribe, xit, pending, fail
  // beforeEach, berofeAll, afterEach, afterAll

  // toBe, .not.toBe, toEqual, toMatch, toBeDefined, toBeUndefined, 
  // toBeNull, toBeTruthy, toBeFalsy, toContain,
  // toBeLessThan, toBeGreaterThan, toThrow, toThrowError

  // spyOn, toHaveBeenCalled, toHaveBeenCalledTimes, toHaveBeenCalledWith
  // and.callThrough, and.returnValue, and.returnValues, and.callFake, and.throwError
  // calls.any, calls.count, calls.argsFor, calls.allArgs, calls.all,
  // calls.mostRecent, calls.first, calls.reset,
  // createSpy, createSpyObj
})
