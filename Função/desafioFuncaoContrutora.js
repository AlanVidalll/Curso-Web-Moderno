// Função contrutora
function Pessoa(nome) {
    this.nome = nome
    this.falar = function(){

        return console.log(`meu nome é : ${nome}`)
    }
}
const p1= new Pessoa('vidal')
p1.falar()