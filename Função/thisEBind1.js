const pessoa = {
    saudacao: 'Bom Dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar
falar()// Conflito entre paradigmas: funcional e Oriantada objetos

const falarDePessoa = pessoa.falar.bind(pessoa)// bind amarra o objeto a qual quero que chame...
falarDePessoa()