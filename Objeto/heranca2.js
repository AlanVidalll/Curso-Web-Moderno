// Cadeia de protótipos(prototype chain)
Object.prototype.atrr0 = 'Z'
const avo = { atrr1: 'A' }
const pai = { __proto__: avo, attr2: 'B' }
const filho = { __proto__: pai, atrr3: 'C' }
console.log(filho.atrr0)
console.log(filho.atrr1)
console.log(filho.atrr0, filho.atrr1, filho.attr2, filho.atrr3);


const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velMax += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}km/h de ${this.velAtual}km/h`
    }
}
const ferrari = {
    modelo: 'F50',
    velMax: 325 // shandowing (sombrear o atributo original )

}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`

    }
}

    // função que estabelece uma relaçao de  pai e filho , carro e o pai e ferrari o filho...
    | Object.setPrototypeOf(ferrari, carro)
    | Object.setPrototypeOf(volvo, carro)
      console.log(ferrari)
    