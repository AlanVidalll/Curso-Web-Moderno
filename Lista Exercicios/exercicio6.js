/*06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */




/* A fórmula de resolução de juro simples é a seguinte:
j = C. i. t

Na qual:
j = juros, C = capital, i = taxa, t = tempo.*/


function juros(capital, taxaJuros, periodoAplicacao) {

    const jurosSimples = (capital *  taxaJuros * periodoAplicacao) + capital
    const jurosComposto = capital * Math.pow((1 + taxaJuros), periodoAplicacao)
    return console.log(`O valor simples é: ${jurosSimples.toFixed(2).toString().replace('.', ',')}
e o valor de juros composto é: ${jurosComposto.toFixed(2).toString().replace('.', ',')}`)
}
juros(40000, 0.015, 12)