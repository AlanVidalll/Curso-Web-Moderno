console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'

console.log(obj1)

function Obj(nome) {

    this.nome = nome
    this.exec = function () {
        console.log('Exec.....')
    }
}

const objt2 = new Obj('Cadeira')
const objt3 = new Obj('Mesa')
console.log(objt2.nome)
console.log(objt3.nome)
objt3.exec()