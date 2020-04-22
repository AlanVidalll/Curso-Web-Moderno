/*11) As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false. */

function bissexto(valor) {
    if (valor % 4 == 0) {
        return true
    } else {
        return false
    }
}
console.log(bissexto(2012))
console.log(bissexto(2013))
console.log(bissexto(2014))
console.log(bissexto(2015))
console.log(bissexto(2016))