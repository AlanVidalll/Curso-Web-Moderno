/*07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”. */

function baskara(a, b, c) {
    let impressao = 0
    const delta = (b * b) - (4 * a * c)
    if (delta < 0) {
        console.log('Delta negativo')
    } else {
        const x1 = (- b + (Math.sqrt(delta))) / (2 * a)
        const x2 = (- b - (Math.sqrt(delta))) / (2 * a)
        const resultado = [x1, x2]
        impressao = console.log(`O Valor de x1 é: ${resultado[0]} 
O valor de x2 é: ${resultado[1]}`)
    }

    return impressao
}
baskara(3, -5, 12)
baskara(12, 5, 0)
