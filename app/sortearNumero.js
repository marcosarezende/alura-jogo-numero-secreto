const menorValor = 1
const maiorValor = 100
const numeroSecreto = gerarNumerroAleatorio()
console.log(numeroSecreto)

const elementoMenorValor = parseInt(document.querySelector('#menor-valor'))
elementoMenorValor.textContent = menorValor
const elementoMaiorValor = document.querySelector('#maior-valor')
elementoMaiorValor.textContent = maiorValor

function gerarNumerroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}