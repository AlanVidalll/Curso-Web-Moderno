// par nome/valor
const saudacao = 'Opa'

function exec() {
    const saudacao = 'Falaaaaaa'
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor 
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua muito legal',
        numero: 564
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)