/* Aqui é uma função com operador ternario
1° operador = condição 
2° operador = aprovado
3° operador = reprovado
*/
const resultado = nota => nota >= 7 ? 'Aprovado' : 'reprovado'


//Aqui chamando a função e passando  a nota como parâmetro...
console.log(resultado(8))
console.log(resultado(5.5))
