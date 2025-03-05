const { decimalToRoman } = require('./romano');

test('Convierte 1 a I', () => {
  expect(decimalToRoman(1)).toBe('I');

});

test('Convierte 2 a II', () => {
  expect(decimalToRoman(2)).toBe('II');
});

test('Convierte 5 a V', () => {
  expect(decimalToRoman(5)).toBe('V');
});

test('Convierte 10 a X', () => {
  expect(decimalToRoman(10)).toBe('X');
});