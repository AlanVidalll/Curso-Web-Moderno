// Cadeia de protótipos(prototype chain)
Object.prototype.atrr0 = 'Z' // Não faça isso em casa...

const avo = { atrr1: 'A' }
const pai = { __proto__: avo, attr2: 'B' }
const filho = { __proto__: pai, atrr3: 'C' }
console.log(filho.atrr0)
console.log(filho.atrr1)
console.log(filho.atrr0, filho.atrr1, filho.attr2, filho.atrr3);


const carro = {
    velAtual: 0,
    velMax: 200,
    acelecarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {

            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h `
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing
}


const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

// função que estabelece uma relaçao de  pai e filho , carro e o pai e ferrari o filho...
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelecarMais(100)
console.log(volvo.status())

ferrari.acelecarMais(300)
console.log(ferrari.status())



