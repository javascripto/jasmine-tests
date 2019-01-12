describe('toContain', () => {
  it('Deve validar verificador toContain que verifica se uma string ou array possui algum valor', () => {
    expect([1, 2, 3]).toContain(2);
    expect('123').toContain(2);
    expect([1, 2, 3]).not.toContain(8);
    expect('123').not.toContain(8);
  });
});
