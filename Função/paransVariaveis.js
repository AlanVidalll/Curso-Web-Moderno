function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.3,1.5,5.4,4.1).toFixed(2))
console.log(soma(1.3,1.5,5.4,`teste`))
console.log(soma(`a`,`b`,`c`))