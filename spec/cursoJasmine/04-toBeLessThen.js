describe('toBeLessThan, toBeGreaterThan', () => {
  it('Deve validar os comparadores numericos toBeLessThan e toBeGreaterThan', () => {
    expect(1).toBeLessThan(2);
    expect(2).toBeGreaterThan(1);
  });
});
