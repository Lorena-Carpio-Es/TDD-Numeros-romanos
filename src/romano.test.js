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

test('Convierte 4 a IV', () => {
  expect(decimalToRoman(4)).toBe('IV');
});

test('Convierte 9 a IX', () => {
  expect(decimalToRoman(9)).toBe('IX');
});

test('Convierte 40 a XL', () => {
  expect(decimalToRoman(40)).toBe('XL');
});

test('Convierte 90 a XC', () => {
  expect(decimalToRoman(90)).toBe('XC');
});

test('Convierte 400 a CD', () => {
  expect(decimalToRoman(400)).toBe('CD');
});

test('Convierte 500 a D', () => {
  expect(decimalToRoman(500)).toBe('D');
});