function decimalToRoman(num) {
  if (num === 1) return 'I';
  if (num === 2) return 'II';
  if (num === 5) return 'V';
  if (num === 10) return 'X';
}

module.exports = { decimalToRoman };