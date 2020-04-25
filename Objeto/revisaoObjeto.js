const produto = new Object
produto.nome = 'Cadeira'
produto.preco = 225
produto['marca do produto'] = 'Generica'// não é legal usar essa prática...

console.log(produto)
// deletando um atributo
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereço: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },

    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }], 
    calcularValorSeguro: function(){
        //...
    }

}
carro.proprietario.endereço.numero = 1000
carro['proprietario']['endereço']['logradouro']= 'Av São Vito'
console.log(carro)
// deletando objetos e função...
delete carro.condutores
delete carro.proprietario.endereço
delete carro.calcularValorSeguro

console.log(carro)