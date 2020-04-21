const notas = [2.1, 4.5, 7.8, 6.4, 8.6]

// Sem callback...
let notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

// Com callback...
const notasBaixas2 = notas.filter(nota => nota < 7)
console.log(notasBaixas2)