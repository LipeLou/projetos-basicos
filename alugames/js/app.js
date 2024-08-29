let jogosAlugados = 1

function alterarStatus(id) {
    let jogo = document.getElementById(`game-${id}`);
    let img = jogo.querySelector('.dashboard__item__img');
    let btn = jogo.querySelector('.dashboard__item__button');
    let name = jogo.querySelector('.dashboard__item__name');


    if (img.classList.contains('dashboard__item__img--rented')) {
        if (confirm(`Devolver ${name.textContent}?`) == true) {
            img.classList.remove('dashboard__item__img--rented');
            btn.classList.remove('dashboard__item__button--return');
            btn.textContent = 'Alugar';
            jogosAlugados--
        } else {
            return
        }

    } else {
        img.classList.add('dashboard__item__img--rented');
        btn.classList.add('dashboard__item__button--return');
        btn.textContent = 'Devolver';
        jogosAlugados++
    }

    console.log(`Foram alugados: ${jogosAlugados}`)
}