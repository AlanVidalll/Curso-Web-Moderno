const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
// Aqui no template,e respeitado a quebra de linha e os espaços...
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)

// expressões...
// Aqui ele executa a espressão dentro da chaves com $ retornando 1 + 1 = 2
console.log(`1 + 1 = ${1 + 1}`)

// Aqui ele criou um função que converte minúscula em maiúscula e chamou ela no template.....
const up = texto => texto.toUpperCase()
console.log(`Ei ...${up('cuidado')}!`)