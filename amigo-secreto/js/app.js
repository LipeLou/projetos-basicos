let amigos = [];

function adicionar() {
    let nome = document.getElementById('nome-amigo').value;
    let lista = document.getElementById('lista-amigos');

    if (nome == '') {
        alert('ERRO! Digite um nome.')
    } else if (amigos.includes(nome)) {
        alert('ERRO! Nome já registrado.')
    } else {
        amigos.push(nome);

        // document.getElementById('lista-amigos').textContent = amigos;
        if (lista.textContent == '') {
            lista.textContent = nome;
        } else {
            lista.textContent = lista.textContent + ', ' + nome;
        }

        document.getElementById('nome-amigo').value = '';
    }
    }


function sortear() {
    if (amigos.length <= 2) {
        alert('ERRO! Necessário mais de 2 amigos para realizar o sorteio')
    } else {
        document.getElementById('lista-sorteio').textContent = '';
        embaralharLista(amigos);
        let sorteio = document.getElementById('lista-sorteio');
    
        for (let i = 0; i < amigos.length; i++) {
    
            if (i == amigos.length - 1) {
                sorteio.innerHTML += `${amigos[i]} -> ${amigos[0]}`;
            } else {
                sorteio.innerHTML += `${amigos[i]} -> ${amigos[i+1]} <br>` 
            }
        }
    }
}

function embaralharLista(list) {
    for (let i = list.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [list[i], list[j]] = [list[j], list[i]];
    }
}

function reiniciar() {
    amigos = []
    document.getElementById('lista-sorteio').innerHTML = '';
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('nome-amigo').value = '';
}
