let contador = 1
// Aqui a condição para saida do while e 5 repeticões....
while (contador <= 5) {

    console.log('Repeticão = ' + contador)
    contador++
}
// Aqui e igual o while acima mai feiro em for....
for (let j = 1; j <= 5; j++) {

    console.log('Repeticão = ' + j)
}
// Aqui e para percorrer o array e mostra todas as notas....
const notas = [7.5, 4.5, 7.9, 2.1]

for (let i = 0; i < notas.length; i++) {

    console.log('nota ' + (i + 1) + ' é = ' + notas[i])
}