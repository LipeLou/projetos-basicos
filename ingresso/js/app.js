function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = document.getElementById('qtd').value;
    
    if (quantidade == '' || quantidade < 0) {
        alert('Digite uma quantidade válida!')
    } else {
        if (tipoIngresso == 'pista') {
            comprarPista(quantidade);
        } else if (tipoIngresso == 'superior') {
            comprarSuperior(quantidade);
        } else {
            comprarInferior(quantidade);
        } 
    
        document.getElementById('qtd').value = ''
    }
}

function comprarPista(quantidade) {
    let pista = parseInt(document.getElementById('qtd-pista').textContent);
    if (quantidade > pista) {
        alert('ERRO! Quantidade indisponivel')
    } else {
        pista = pista - quantidade;
        document.getElementById('qtd-pista').textContent = pista;
        alert('Compra realizado com sucesso!')
    }
}

function comprarSuperior(quantidade) {
    let superior = parseInt(document.getElementById('qtd-superior').textContent);
    if (quantidade > superior) {
        alert('ERRO! Quantidade indisponivel')
    } else {
        superior = superior - quantidade;
        document.getElementById('qtd-superior').textContent = superior;
        alert('Compra realizado com sucesso!')
    }
}

function comprarInferior(quantidade) {
    let inferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (quantidade > inferior) {
        alert('ERRO! Quantidade indisponivel')
    } else {
        inferior = inferior - quantidade;
        document.getElementById('qtd-inferior').textContent = inferior;
        alert('Compra realizado com sucesso!')
    }
}