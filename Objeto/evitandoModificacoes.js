// Object.preventExtesions = não é possível incluir ou deletar atributos, somente atribui novos valores....

const produto = Object.preventExtensions({

    nome: 'Arroz', preco: 10.99, tah: 'Promoção'
})
console.log('Extensível: ', Object.isExtensible(produto))// Testa se é extensível ou não...

produto.nome = 'Borracha'
produto.descricao = 'Borracha branca'
delete produto.tag
console.log(produto)

/* Object.seal = Aqui e parecido , não é possível excluir ou adicionar atributos ,
 mais é possível alterar seus valores...*/
const pessoa = { nome: 'Bianca', idade: 26 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobreNome = 'Silva'
delete pessoa.nome
pessoa.idade = 39
console.log(pessoa)

// Object.freeze = selado + valores constantes...


