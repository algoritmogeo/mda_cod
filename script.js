// Função para gerar o número
function gerarNumero() {
    // Passo 1: Definir os 5 dígitos sequenciais
    const sequenciaFixa = "12345"; // Você pode alterar para qualquer sequência de 5 dígitos

    // Passo 2: Gerar 2 dígitos aleatórios
    const digitosAleatorios = String(Math.floor(Math.random() * 100)).padStart(2, '0'); // Garante 2 dígitos

    // Passo 3: Montar o número base (7 dígitos)
    const numeroBase = sequenciaFixa + digitosAleatorios;

    // Passo 4: Calcular o dígito verificador
    const digitoVerificador = calcularDigitoVerificador(numeroBase);

    // Passo 5: Montar o número final com o dígito verificador
    const numeroFinal = numeroBase + "-" + digitoVerificador;

    return numeroFinal;
}

// Função para calcular o dígito verificador
function calcularDigitoVerificador(numeroBase) {
    // Pesos fixos para cada dígito
    const pesos = [2, 3, 4, 5, 6, 7, 8];

    // Converter o número base em um array de dígitos
    const digitos = numeroBase.split("").map(Number);

    // Multiplicar cada dígito pelo peso correspondente e somar os resultados
    let soma = 0;
    for (let i = 0; i < digitos.length; i++) {
        soma += digitos[i] * pesos[i];
    }

    // Calcular o resto da divisão por 11
    const resto = soma % 11;

    // Determinar o dígito verificador
    if (resto < 2) {
        return "0";
    } else {
        return String(11 - resto);
    }
}

// Adicionar evento ao botão
document.getElementById("gerarNumero").addEventListener("click", function () {
    const numeroGerado = gerarNumero();
    document.getElementById("resultado").textContent = "Número gerado: " + numeroGerado;
});
