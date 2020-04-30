// Não aceita repetição/ não indexada

const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco')// não imprime não aceita repetição

console.log(times)
console.log(times.size)// quantidades de elementos
console.log(times.has('Vasco'))// verifica se tem tem vasco como elemento
times.delete('Vasco')// deleta vasco 
console.log(times)

const nomes = ['Maria','Lucas', 'julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)