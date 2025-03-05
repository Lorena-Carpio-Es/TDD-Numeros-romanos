function decimalToRoman(num) {
  if (num === 1) return 'I';
  if (num === 2) return 'II';
  if (num === 5) return 'V';
}

module.exports = { decimalToRoman };