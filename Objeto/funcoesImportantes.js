const pessoa = {
    nome: 'Rebecca',
    idade: 25,
    peso: 85
}

console.log(Object.keys(pessoa)) // Pega as chaves do objeto, (Nomes dos atributos)...
console.log(Object.values(pessoa)) // Pega os valores do objeto, (Valores dos atributos)...
console.log(Object.entries(pessoa)) // Aqui ele retorna arrays de uma só vez, 1 array de cada atributo com seu valor...

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave} : ${valor}`);

});


Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // pode ser listada 
    writable: false,// Não permite ser alterada
    value: '01/05/1987'
})

pessoa.dataNascimento = '01/02/1988'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))


// Object.assign (ECMAScript 2015)

const dest = { a: 1 }
const o1 = { b: 1 }
const o2 = { c: 1, a: 4 }
const obj = Object.assign(dest, o1, o2)
console.log(dest)

Object.freeze(obj)
obj.c = 1234
console.log(obj)
