let num1 = 1
let num2 = 2

// Acrecenta  + 1 no valor de num1...
num1++
console.log(num1)

// Decrementa - 1 no valor de num1...
--num1
console.log(num1)

// Aqui ele retorna false porque ++num1 e executado antes da comparação...
console.log(++num1 === num2--)
// aqui já foi executando ambos, então retorna true...
console.log(num1 === num2)