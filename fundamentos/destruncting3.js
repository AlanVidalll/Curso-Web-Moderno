function rand({ min = 0, max = 1000 }) {

    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)

}

// aqui criamos um objeto com min de 40 e max 50
const obj = { max: 50, min: 40 }
//chamamos a função rand e passamos obj com parametro ele vai gerar números entre 40 e 50....
console.log(rand(obj))
// Aqui só passamos como parâmetro min de 55, assim gerando números de 55 a 1000....
console.log(rand({ min: 55 }))
// Aqui passamos a função rand com objeto vazio, assim gerando numeros de 0 a 1000...
console.log(rand({}))
// Se passarmos a função rand sem objeto nenhum vai gerar erro, vai algo null ou undefined ...
//console.log(rand())