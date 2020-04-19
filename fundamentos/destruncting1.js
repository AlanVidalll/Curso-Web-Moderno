// Criamos um objeto pessoa e dentro dessse objeto criamos outro objeto chamdo endereço...
const pessoa = {
    nome: 'Alan',
    idade: 25,
    endereco: {
        logradouro: 'Rua Abc',
        numero: 123
    }
}
/* Destruncting e para retirar algo da estrutura , exemplo abaixo 
,tiramos nome e idade do objeto pessoa e imprimimos na tela...*/
const { nome, idade } = pessoa
console.log(nome, idade)
// Aqui fizemos  o mesmo de cima porem mudamos o nome de nome para n e de idade para i...
const { nome: n, idade: i } = pessoa
console.log(n, i)
// Aqui pegamos atributos que não existem dentro de pessoa, ele retorna undefined...
const { sobrenome, BemHumorada = true } = pessoa
console.log(sobrenome, BemHumorada)
// Aqui pegamos os atributos do objeto endereço que está dentro do objeto dentro de pessoa...
const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)