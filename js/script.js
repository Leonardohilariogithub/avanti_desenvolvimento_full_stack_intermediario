function calcularIMC() {
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const imc = (peso / (altura * altura)).toFixed(2);

    let resultado = '';
    let imagemSrc = '';

    if (imc < 18.5) {
        resultado = 'Abaixo do peso';
        imagemSrc = './imagens/obesidade.jpg'; 
    } else if (imc >= 18.5 && imc < 24.9) {
        resultado = 'Peso normal';
        imagemSrc = './imagens/obesidade.jpg'; 
    } else if (imc >= 25 && imc < 29.9) {
        resultado = 'Sobrepeso';
        imagemSrc = './imagens/obesidade.jpg';
    } else {
        resultado = 'Obesidade';
        imagemSrc = './imagens/obesidade.jpg'; 
    }

    document.getElementById('resultado').textContent = `Seu IMC é ${imc} (${resultado})`;
    document.getElementById('imagem-imc').innerHTML = `<img src="${imagemSrc}" alt="${resultado}">`;
}
