// convert input para real 
function formatarNumero(campo) {
    const valor = campo.value.toString();
    const valorSemCaracteresEspeciais = valor.replace(/[^0-9,]/g, "");
    const partes = valorSemCaracteresEspeciais.split(",");
    const parteInteiraFormatada = partes[0].replace(/(?<=.)(?=(?:\d{3})+$)/g, ".");
    const parteDecimalFormatada = partes.length > 1 ? `,${partes[1].slice(0, 2)}` : "";
    const valorFormatado = `${parteInteiraFormatada}${parteDecimalFormatada}`;
    const valorOriginal = parseFloat(valorSemCaracteresEspeciais.replace(',', '.')); // Convertendo a parte numérica de volta para um número

    campo.value = valorFormatado;
    campo.dataset.valorOriginal = valorOriginal; // Armazenando o valor original como um atributo de dados
}


// Remove os separadores de milhares e substitui a vírgula pelo ponto
function converterParaFormatoAmericano(valorEmReais) {
    var valorFormatado = valorEmReais.replace(/\./g, '').replace(',', '.');

    // Retorna o valor formatado
    return valorFormatado;
}