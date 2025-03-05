const { decimalToRoman } = require('./romano');

document.getElementById('converterForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const number = parseInt(document.getElementById('number').value, 10);
  const romanNumeral = decimalToRoman(number);
  document.getElementById('result').textContent = romanNumeral;
});