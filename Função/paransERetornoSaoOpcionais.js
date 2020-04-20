function area(largura, altura) {

    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido ${area}m2. `)
    } else {

        return area
    }
}
console.log(area(2, 5))// Retorna o calculo normal...
console.log(area(5))// Retorna NaN poruqe só passou  1 parâmetro...
console.log(area())// Retorna NaN porque não passou nenhum parâmetro...
console.log(area(2, 5, 4, 5, 7, 4, 5, 5))// Retorna normal, porque ele pega os dois parâmetros necessários e descarta o resto...
console.log(area(5, 5))