function rand([min = 0, max = 1000]) {

    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

/* Como criamos o if para inversão de minimo for maior que maximo,podemos colocar
somente o valor na declaração sem especificar qual é qual... */
console.log(rand([50, 40]))
// Podemos declarar 1 numero somente, no caso vai assumir como minimo...
console.log(rand([955]))
// Podemos declarar 1 numero somente, no caso aqui vai assumir como maxímo porque o primiro declamos vazio...
console.log(rand([, 955]))
// Podemos passar um array vazio, ele assumira os valores padrao da função...
console.log(rand([]))
// Se passarmos a função vazia, gera um erro, undefined ou null....
//console.log(rand())

