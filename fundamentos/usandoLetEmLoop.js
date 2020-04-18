/*Criamos aqui agora um for com a variàvel let, e aqui tentamos imprimir ela fora do bloco for,
 isso gera um erro por que let e tipo não visivel fora do bloco de controle */
for (let i = 0; i < 10; i++) {
    console.log(i)
}
console.log('i =', i)