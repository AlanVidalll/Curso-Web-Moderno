// let e const...

{
    var a = 2  // var não tem escopo de bloco...
    let b = 3 // let tem escopo de bloco...
    console.log(b)
}
console.log(a) // Aqui se consegue imprimir na tela porque não tem escopo de bloco...
//console.log(b) // Aqui da erro só finciona dentro do escopo do bloco..

// Template String...

const produto = 'Ipad'
console.log(`${produto} é caro!!!`)

// Destructuring...

const [l, e, ...tras] = 'Cod3r'
console.log(l, e, tras)

const [x, y] = [1, 2, 3]
console.log(x, y)

const [c, , d] = [1, 2, 3]
console.log(c, d)

const { idade: i, nome } = { nome: 'Ana', idade: 9 }
console.log(nome)
console.log(i)