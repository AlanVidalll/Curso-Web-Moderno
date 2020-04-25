// pessoa -> 123  {...}

const pessoa = {nome:'João'}
pessoa.nome = 'Pedro'
console.log(pessoa);

// pessoa -> 456  {...}
//pessoa = {nome: "Ana"} erro
//console.log(pessoa)

Object.freeze(pessoa) // Congela o objeto não permitindo alterações...


// Nada aqui para baixo e alterado depois do Object.freeze...
pessoa.nome = 'Maria'
pessoa.end = 'Rua Ortolani'
delete pessoa.nome
console.log(pessoa);


