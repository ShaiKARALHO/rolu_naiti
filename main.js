function criarCartao(pergunta, resposta) {
    let conteudo = document.getElementById("conteudo")
    let cartao = document.createElement('article')
    cartao.classList = 'cartao'

    cartao.innerHTML = `
    
    <div class="cartao--conteudo">
                    <div class="cartao--pergunta"><p>Qual o item que faz você dar pulo duplo no Hollow Knight</p></div>
                    <div class="cartao--resposta"><p>Asas do Monarca</p></div>
                </div>
    
    `

    conteudo.appendChild(cartao)
}

criarCartao(1,2)