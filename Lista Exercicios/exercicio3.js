/*03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente. */

function baseExpoente(base, expoente) {

    const resultado = Math.pow(base, expoente)
    return console.log(`Resultado é = ${resultado}`)

}
baseExpoente(10, 2)