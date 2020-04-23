/*09) Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de a nota ser 38 , arredondamento é possível pois atingirá 40
e o aluno será aprovado. */


function aprovacao(nota1, nota2, nota3, nota4) {
    let resultado = (nota1 + nota2 + nota3 + nota4) / 4
    if (resultado >= 38 && resultado <= 100) {
        console.log(`Parabéns você foi aprovado com a nota: ${Math.ceil(resultado / 5) * 5}`)
    } else if (resultado >= 0 && resultado < 38) {
        console.log(`Lamentávelmente você foi reprovado com a nota: ${resultado}`)
    }else{
        console.log('Nota inválida!!!')
    }
    return this
}
aprovacao(47, 35, 78, 650)
aprovacao(37, 45, 78, 56)
aprovacao(35, 45, 25, 46)
aprovacao(38, 55, 78, 69)
