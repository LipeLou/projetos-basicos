let precoTotal = 0
let carrinho = document.getElementById('lista-produtos');
let total = document.getElementById('valor-total')

function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto =   produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    if (quantidade <= 0 || isNaN(quantidade)) {
        alert('ERRO! O campo "Qtde." deve receber um valor válido')
        return
    }
    let preco = quantidade * valorUnitario;
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`

    precoTotal = precoTotal + preco
    total.innerHTML = `R$${precoTotal}`
    document.getElementById('quantidade').value = ''
}

function limpar() {
    precoTotal = 0;
    carrinho.innerHTML = '';
    total.textContent = `R$${precoTotal}`
    document.getElementById('quantidade').value = ''
}