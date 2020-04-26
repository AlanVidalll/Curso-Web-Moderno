console.log(typeof Array, typeof new Array, typeof [])// verificando os tipos de dados....


let aprovados = new Array('Bia', 'Bruno', 'Ana')// Criando um array....
console.log(aprovados)

aprovados = ['Bia', 'Bruno', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo' // Altera o valor do elemto no indice[3]...
console.log(aprovados)
aprovados.push('Alan')// Add um elemento no array...
console.log(aprovados.length)

aprovados[9] = 'Leandro'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()// Altera o array , colocou o paulo depois do ultimo elemento com valor, organiza o array...
console.log(aprovados)

delete aprovados[1]
console.log(aprovados)

aprovados = ['Bia', 'Ana', 'Carlos']
/* No splice() passamos o índice e depois quantos índice fazer a exclusão depois dele,
e podemos add elementos também a partir dele... */
aprovados.splice(1, 2, 'Elemento1', 'Elemento2')
console.log(aprovados)