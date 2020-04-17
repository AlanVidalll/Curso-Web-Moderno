const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 6.871
const avaliacao2 = 9.458

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // toFixed() = função que limita casa decimais...
console.log(media.toFixed(2).toString()) // toString()= Converteu a constante media para uma string com 2 casas decimais...
console.log(media.toString(2))// Aqui ele converte o resultado em binário....
console.log(typeof media) // Retorna o tipo da constante media...


