function calcIMC(){
    //entrada de dados
    let valorPeso = document.getElementById("campo_peso").value;
    let valorAltura = document.getElementById("campo_altura").value;

    //processamento
    let valorIMC = valorPeso / (valorAltura * valorAltura);
    let valorFinal = parseFloat(valorIMC.toFixed(2))
    let valorClass = '';
    if (valorFinal < 18.5) {
        valorClass = 'Abaixo do peso';
    } else if ( valorFinal >= 18.5 && valorFinal < 24.9) {
        valorClass = 'Peso normal';
    } else if (valorFinal >= 25 && < 29.9) {
        valorClass = 'Sobrepeso';
    } else if (valorFinal >= 30 && < 39.9) {
        valorClass = 'Obesidade';
    } else if (valorFinal){
        valorClass = 'Obesidade grave';
    }

    //saida
    document.getElementById("resultado").textContent = "Seu IMC e de: " + valorFinal
    document.getElementById("classificacao-imc").textContent = valorClass 
}