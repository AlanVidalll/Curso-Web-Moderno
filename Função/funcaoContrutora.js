function Carro(velocidadeMaxima = 200, delta = 5) {
    // Atributo privado
    let velocidadeAtual = 0
    // Metodo publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    // Metodo publico
    // O uso de this aqui torna o metodo publico...
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}
// Criamos um carro chamado ferrari
const ferrari = new Carro
// Chamamos o metodo acelerar
ferrari.acelerar()
ferrari.acelerar()
// Chamamos o metodo de velocidade atual e imprimimos na tela....
console.log('Ferrari = ' + ferrari.getVelocidadeAtual())

// Aqui passamos os parâmetros como 350 km de velocidade maxíma e aceleração de 20 km....
const civic = new Carro(350, 20)
civic.acelerar()
civic.acelerar()
civic.acelerar()
civic.acelerar()
console.log('Civic = ' + civic.getVelocidadeAtual())

//Verificando os tipos...
console.log(typeof Carro)
console.log(typeof ferrari)