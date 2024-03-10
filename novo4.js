// Solicitar os números ao usuário
const num1 = parseFloat(prompt("Informe o primeiro número:"));
const num2 = parseFloat(prompt("Informe o segundo número:"));

try {
    // Realizar a divisão
    const resultado = num1 / num2;

    // Verificar se o resultado é um número finito
    if (isNaN(resultado) || !isFinite(resultado)) {
        throw new Error("Resultado inválido.");
    }

    // Mostrar o resultado da divisão
    console.log(O resultado da divisão de ${num1} por ${num2} é: ${resultado});
} catch (error) {
    // Capturar e tratar a exceção
    console.log("Ocorreu um erro:", error.message);
} finally {
    // Executar esta parte do código independentemente de ocorrer uma exceção ou não
    console.log("Fim da operação.");
}