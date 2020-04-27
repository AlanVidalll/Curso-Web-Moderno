const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.3
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rodrigo',
        nota: 7.5
    }, {
        nome: 'Alan',
        nota: 10
    }]
}]

const getNotaAluno = aluno => aluno.nota
const getNotasTurmas = turma => turma.alunos.map(getNotaAluno)

const notas1 = escola.map(getNotasTurmas)
console.log(notas1)

console.log([].concat([8.1, 9.3], [7.5, 10]))

Array.prototype.flatMap = function (callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const nota2 = escola.flatMap(getNotasTurmas)
console.log(nota2)