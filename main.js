function criarCartao(pergunta, resposta) {
    let conteudo = document.getElementById("conteudo")
    let cartao = document.createElement('article')
    cartao.classList = 'cartao'

    cartao.innerHTML = 'TESTANDO O INNER'

    conteudo.appendChild(cartao)
}

criarCartao(1,2)