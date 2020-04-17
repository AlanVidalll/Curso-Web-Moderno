// Aqui é o tradicional retorna false....
let isAtivo = false
console.log(isAtivo)

// Aqui é o tradicional retorna true....
isAtivo = true
console.log(isAtivo)

/* Aqui a variavel se tona un nunber, 
mas para tranformar isso em boolean so usar negação,
uma negação " !isAtivo " = false e " !!isAtivo" = true */
isAtivo = 1
console.log(!isAtivo)
console.log(!!isAtivo)

// Aqui várias situações qe retornam true .....
console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'TExto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

// Aqui várias situações qe retornam false .....
console.log('Os Falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Para finalizar...')
// Aqui retorna true, uma condição e verdadeira no caso ' ' .....
console.log(!!('' || null || 0 || ' '))

