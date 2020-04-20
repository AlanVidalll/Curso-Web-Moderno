//Criamos uma função para retorna algo dentro do intervalo....
Number.prototype.entre = function (inicio, fim) {

    return this >= inicio && this <= fim

}
/* Aqui criamos uma função que recebe a nota e imprime em qual situação o aluno se 
encontra de acordo com as condicionais de intervalos estabelicidas...*/
const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro de honra')
    } else if (nota.entre(7, 8.999)) {
        console.log('Aprovado')
    } else if (nota.entre(4, 6.999)) {
        console.log('Recuperação')
    } else if (nota.entre(0, 3.999)) {
        console.log('Reprovado')
    }else{
        console.log('Nota fora do intervalo de 0 à 10')
    }
}
// Chamando a função passando a nota e imprimindo....
imprimirResultado(9.5)
imprimirResultado(7.5)
imprimirResultado(6.3)
imprimirResultado(3.5)
imprimirResultado(11)