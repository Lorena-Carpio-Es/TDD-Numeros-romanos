const { decimalToRoman } = require('./romano');

test('Convierte 1 a I', () => {
  expect(decimalToRoman(1)).toBe('I');

});

test('Convierte 2 a II', () => {
  expect(decimalToRoman(2)).toBe('II');
});

