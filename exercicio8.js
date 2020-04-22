/* 08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).*/


let lista = ['10', '25', '19', '25', '13', '16', '9', '18']
const pedro = function (pontoAtual) {
    lista.push(pontoAtual)
    let lista2 = lista.filter(e => e > parseInt(lista[0]))
    let recorde = lista2.length - 1
    if (pontoAtual > lista[0]) {
        recorde++
    } else {
        recorde
    }
    var piorJogo = Math.min(...lista).toString()
    piorJogo = lista.indexOf(piorJogo)
    let resultado = [recorde, piorJogo]
    return console.log(resultado)
}
pedro('5')
pedro('8')
pedro('15')



