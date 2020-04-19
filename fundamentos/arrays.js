
// Declarando um array com 4 elementos...
const valores = [7.1, 9.5, 2.6, 5.8]
// Imprimindo o indice '0' e '3' do array...
console.log(valores[0], valores[3])
// Imprimindo um indice q nao tem tem no array, O retorno vai ser undefined...
console.log(valores[4])
// Adicionando um elemento no array...
valores[4] = 10
// Imprimindo todos elementos do array...
console.log(valores)
// Imprimindo a quantidade de elementos dentro do array...
console.log(valores.length)
// O array em javascript e heterogênio, aceita valores de diferentes tipos dentro dele...
valores.push({ id: 3 }, false, null, 'teste')
// imprimindo a array com vaior tipos de valores dentro dele....
console.log(valores)
//  Função pop() retira um ultimo elemnto do array...
console.log(valores.pop())
// Abaixo ele deleta o indice declarado do array...
delete valores[0]
// Imprimindo todos elementos do array...
console.log(valores)
// Retorna o tipo do array no caso 'object'...
console.log(typeof valores)