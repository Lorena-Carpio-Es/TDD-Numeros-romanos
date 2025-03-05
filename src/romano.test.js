const { decimalToRoman } = require('./romano');

test('Convierte 1 a I', () => {
  expect(decimalToRoman(1)).toBe('I');
});