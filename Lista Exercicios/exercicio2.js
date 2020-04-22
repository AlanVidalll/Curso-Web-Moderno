/*02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).*/



function triangulos(lado1, lado2, lado3) {

    if (lado1 === lado2 && lado1 === lado3) {
        console.log('Equilátero!')
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        console.log('Isósceles!')
    } else {
        console.log('Escaleno!')
    }
    return this
}
triangulos(10, 10, 10)
triangulos(5, 10, 10)
triangulos(10, 5, 10)
triangulos(10, 10, 5)
triangulos(10, 12, 13)
triangulos(13, 12, 10)
triangulos(12, 15, 10)

