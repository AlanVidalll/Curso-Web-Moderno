// Função sem retorno...

// funçao que soma e imprime o valor de a + b...
function imprimirSoma(a, b) {
    console.log(a + b)
}
// chamando a função e passando 2 e 3 como valores a somar, retorno será 5...
imprimirSoma(2, 3)
// Em javascript podemos passar 1 parâmentro, o outro parâmetro será undefined e o retorno será um NaN...
imprimirSoma(2)
// Podemos passar parâmentros a mais também, porém ele so vai pegar a e b e descartar os outros...
imprimirSoma(2, 10, 5, 8, 7, 9, 9, 4)
// Chamar a função sem passar os parâmentros retorna NaN...
imprimirSoma()
// Chamndo um console.log() vazio para pular uma linha...
console.log()

// Função com retorno...

// Criamos a funçao soma...
function soma(a, b = 0) {
    return a + b
}
// Imprimindo a função soma com parÂmetros 2 e 3, o retorno será 5.
console.log(soma(2, 3))
//Aqui ele vai retorna 2, porque o parâmetro b ja esta definido com 0 na função...
console.log(soma(2))