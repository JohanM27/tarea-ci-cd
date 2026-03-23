const { add, subtract, multiply } = require('../src/math');

describe('Funciones matemáticas', () => {
  test('add suma correctamente', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
  });

  test('subtract resta correctamente', () => {
    expect(subtract(5, 3)).toBe(2);
    expect(subtract(0, 4)).toBe(-4);
  });

  test('multiply multiplica correctamente', () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(-2, 3)).toBe(-6);
  });
});
