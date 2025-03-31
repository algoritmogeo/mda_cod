// Função para gerar o número
function gerarNumero() {
    // Passo 1: Definir os 4 dígitos fixos iniciais
    const prefixoFixo = "2025"; // Sempre começa com 2025

    // Passo 2: Definir os próximos 3 dígitos fixos
    const sequenciaFixa = "123"; // Você pode alterar para qualquer sequência de 3 dígitos

    // Passo 3: Gerar 2 dígitos aleatórios
    const digitosAleatorios = String(Math.floor(Math.random() * 100)).padStart(2, '0'); // Garante 2 dígitos

    // Passo 4: Montar o número final
    const numeroFinal = prefixoFixo + sequenciaFixa + digitosAleatorios;

    return numeroFinal;
}

// Adicionar evento ao botão
document.getElementById("gerarNumero").addEventListener("click", function () {
    const numeroGerado = gerarNumero();
    document.getElementById("resultado").textContent = "Número gerado: " + numeroGerado;
});