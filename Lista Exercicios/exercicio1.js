/*01) Crie uma função que dado dois valores (passados como parâmetros) 
mostre no console a soma, subtração,
multiplicação e divisão desses valores. */


function contas(a, b) {

    const soma = console.log('Soma é = ' + (a + b))
    const sub = console.log('Subtração é = ' + (a - b))
    const mult = console.log('Multiplicação é = ' + (a * b))
    const div = console.log('Divisão é = ' + (a / b))
    return console.log("Obrigado!!!")
}
contas(10, 8)

function contas1(a, b) {

    var operacoes = [a + b, a - b, a * b, a / b]
    
return console.log(`Soma é : ${operacoes[0]},
Subtração é : ${operacoes[1]}, 
Multiplicação é : ${operacoes[2]},
Divisão é : ${operacoes[3]}`)
}
contas1(10, 8)

