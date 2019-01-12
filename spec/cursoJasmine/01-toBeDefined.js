describe('toBeDefined, toBeUndefined, toBeNull', () => {
  it('Deve validar o comparador toBeDefined', () => {
    var n1 = 5, n2;

    expect(n1).toBeDefined();
    expect(n2).not.toBeDefined();

    expect(-1).toBeDefined();
    expect(0).toBeDefined();
    expect(1).toBeDefined();

    expect(2.2).toBeDefined();

    expect(NaN).toBeDefined();
    expect(Infinity).toBeDefined();

    expect('').toBeDefined();
    expect('string').toBeDefined();

    expect(true).toBeDefined();
    expect(false).toBeDefined();
    expect(null).toBeDefined();

    // apenas undefined não passa no teste
    expect(undefined).not.toBeDefined();
    expect(undefined).toBeUndefined();

    // toBeNull so falha se algo fo null
    expect(null).toBeNull();
  });
});
