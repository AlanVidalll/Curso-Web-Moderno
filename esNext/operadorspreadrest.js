// Operador ... rest(juntar)/spread(Espalhar)...
// Usar rest com parâmetro de função...


// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 2555.56 }
const clone = { ativo: true, ...funcionario }
console.log(clone)

// usar spread com array...
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', 'Rafaela', ...grupoA, 'Leandro']
console.log(grupoFinal)

