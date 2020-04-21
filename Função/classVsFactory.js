// Classe
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log(`meu nome é : ${this.nome}`)
    }
}
const p1= new Pessoa('Alan')
p1.falar()


// Factory
const criarPessoa = nome => {
    return{
        falar: () => console.log(`meu nome é : ${nome}`)
    }
}
const p2 = criarPessoa('Alan')
p2.falar()