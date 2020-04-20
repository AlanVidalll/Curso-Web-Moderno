const notas = [7.5, 4.5, 7.9, 2.1]
// Percorrendo um array com for in
for (i in notas) {

    console.log(i, notas[i])
}

const pessoa = {

    nome: "alan",
    sobrenome: "Silva",
    idade: 25,
    peso: 85
}
// Percorrendo um objeto com for in
for (atributo in pessoa) {

    console.log(atributo + ' = ' + pessoa[atributo])
} 