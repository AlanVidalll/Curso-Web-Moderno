// Aqui criamos um array...
const funcs = []
/* Aqui criamos um for com var chamamos a função push
 e dentro dela criamos uma função que imprimi o valor de i....*/
for (var i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i)
    })
}
// chamos os indices diferentes e aqui ele retorna os dois valor 10 para a surpresa de todos...
// ele pegar o valor final depois que se encerrou o bloco...
funcs[2]()
funcs[8]()