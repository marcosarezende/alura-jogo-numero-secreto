function chutePossuiValorValido() {
    const numero = +chute

    if (chuteForInvalido(numero)) {

        if (chute.toUpperCase() === "GAME OVER") {

            document.body.innerHTML =
                `
                <h2>Game Over!!!</h2>
                <h3>Pressione o botão para jogar novamente</h3>
                <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
                `
            document.body.style.backgroundColor = "black";
        } else {

            elementoChute.innerHTML += '<div>Valor Inválido</div>';
        }
        return
    }

    if (chuteForInvalido(numero)) {
        console.log('<div>Valor inválido</div>')
        return
    }

    if (numeroMaiorOuMenorQuePermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: o número precisa estar entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você Acertou</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>

        <button type=button id=jogar-novamente class="btn-jogar">Jogar novamente</button>
        `
        return
    }

    if (numeroSecreto < chute)
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`
    else if (numeroSecreto > chute)
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`
}

function numeroMaiorOuMenorQuePermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente')
        window.location.reload()
})
