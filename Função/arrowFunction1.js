//  Função normal...
let dobro = function (a) {
    return 2 * a
}
// Função arrow...
dobro = (a) => {
    return 3 * a
}
// Função arrow com uníco parâmetro (implícito)...
dobro = a => 4 * a
console.log(dobro(Math.PI).toFixed(2))

let ola = function () {
    return 'Olá'
}

ola = () => { return 'Olá' }

ola = () => 'Olá'

console.log(ola())