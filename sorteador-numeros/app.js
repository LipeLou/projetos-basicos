function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
        
    let sorteados = [];
    let numero;

    if (de >= ate || (ate - de + 1) < quantidade) {
        alert('ERRO! Corrija os dados inseridos');
        return;
    } 

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);

        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }
        sorteados.push(numero);
    }

    let palavraNumeroSorteado = quantidade > 1 ? 'Números sorteados:' : 'Número sorteado:';
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">${palavraNumeroSorteado} ${sorteados}</label>`;

    botaoHabilitado();
    
}

function obterNumeroAleatorio(min, max) {
    return parseInt(Math.random() * (max - min + 1) + min);

}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    botadoDesabilitado();
}

function botaoHabilitado() {
    let botao = document.getElementById('btn-reiniciar');
    botao.classList.remove('container__botao-desabilitado');
    botao.classList.add('container__botao');

}

function botadoDesabilitado() {
    let botao = document.getElementById('btn-reiniciar');
    botao.classList.remove('container__botao');
    botao.classList.add('container__botao-desabilitado');
}