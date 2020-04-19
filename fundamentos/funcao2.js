// Armazenando uma funçaõ em uma variável...

// Atribuimos a função a uma constante...
const imprimirSoma = function (a, b) {

    console.log(a + b)
}
// Chamamos a função passando os parâmetros...
imprimirSoma(2, 3)


// Armazenando uma função arrow em uma variável ...

// Aqui a asseta substitui o nome function, é uma forma mais reduzida de fazer...
const soma = (a, b) => {
    return a + b
}
// chamando a função e imprimindo o resultado...
console.log(soma(2, 3))


// Retorno implícito 

// aqui nao abrimos chaves por que somente tem 1 liha de sentença, e possível fazer dessa maneira...
const subtracao = (a, b) => a - b
// CHamando a função e retornando o resultado...
console.log(subtracao(10, 5))

// Aqui somente com 1 parâmetro...
const imprimir2 = a => console.log(a)
// Chamando a função e passando parâmetro...
imprimir2('Legal Demais!!!')