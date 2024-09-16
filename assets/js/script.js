document.getElementById('imcForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const height = parseFloat(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('weight').value);

  if (isNaN(height) || isNaN(weight)) {
      alert('Por favor, insira valores válidos.');
      return;
  }

  const imc = (weight / (height * height)).toFixed(2);
  let classification = '';

  if (imc < 18.5) {
      classification = 'Abaixo do peso';
  } else if (imc >= 18.5 && imc < 24.9) {
      classification = 'Peso normal';
  } else if (imc >= 25 && imc < 29.9) {
      classification = 'Sobrepeso';
  } else if (imc >= 30 && imc < 34.9) {
      classification = 'Obesidade grau 1';
  } else if (imc >= 35 && imc < 39.9) {
      classification = 'Obesidade grau 2';
  } else {
      classification = 'Obesidade grau 3';
  }

  document.getElementById('result').textContent = `Seu IMC é ${imc} (${classification})`;
});
