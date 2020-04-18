console.log(typeof Object)
console.log(typeof new Object)

const Cliente = function () { } // função
console.log(typeof Cliente)
console.log(typeof new Cliente)


class Produto { } // Classe
console.log(typeof Produto)
console.log(typeof new Produto)


/*Aqui basicamente antes de instaciarmos algo retorna function no typeof
e depois que instaciamos ele retorna object...*/