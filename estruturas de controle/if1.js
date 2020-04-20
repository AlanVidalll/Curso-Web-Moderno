/* criamos uma função que recebe nota e fizemos um if 
para imprimir na tela se a nota for igual ou maior que 7,
se for menos nada sera impresso...*/
function soBoaNOticia(nota) {
    if (nota >= 7) {
        console.log('Aprovado com ' + nota)

    }
}
soBoaNOticia(8)

// Aqui passamos um valor sem condição relacional , entao o if retorna true ou false....
function seForVerdadeEuFalo(valor) {

    if (valor) {
        console.log('É verdade ' + valor)
    }
}
seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([2, 5])
seForVerdadeEuFalo({})
