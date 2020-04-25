//  usando notação literal...

const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object);
const obj2 = new Object
console.log(obj2);

// Funções contrutoras...

function Produto(nome, preco, desconto) {
    this.nome = nome
    this.getPrecoComDEsconto = () => {
        return preco * (1 - desconto)

    }
}

const p1 = new Produto('Caneta', 5.50, 0.10)
const p2 = new Produto('Lapís', 3.45, 0.10)
console.log(p1.getPrecoComDEsconto().toFixed(2), p2.getPrecoComDEsconto().toFixed(2));

// Funçaõ Factory
function criarFuncionario(nome, salariobase, faltas) {
    return {
        nome,
        salariobase,
        faltas,
        getsalario() {
            return (salariobase / 30) * (30 - faltas)
        }
    }
}

const f1 =  criarFuncionario('João', 1500,2)
const f2 =  criarFuncionario('Paula', 3000,5)

console.log(f1.getsalario());
console.log(f2.getsalario());

// Object.create...

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha);

// Uma função famosa que retorna um Objeto...

const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info);


