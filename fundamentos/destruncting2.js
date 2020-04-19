const [a] = [10]
console.log(a)

//Aqui se atibui um nome para cada elemento do array...
const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

// Aqui atribuimos nota ao segundo elemento do 2° array que é = 6...
const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)