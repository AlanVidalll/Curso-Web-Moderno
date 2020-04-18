/* Criamnos um loop com var e imprimimos ele fora do bloco
 e valor retorna 10 como se fosse dentro do bloco,se usarmos let isso gera um erro,
 com var a variavével i e visivel forara do bloco for...*/

for (var i = 0; i < 10; i++) {
    console.log(i)
}
console.log('i =', i)