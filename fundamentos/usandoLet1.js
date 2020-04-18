
/* Aqui a variável let impri o q esta fora do escopo e dentro com suas atribuiçoes difentes,
pois let não e acessivel fora do escopo apesar de ter o mesmo nome, então o retorno será 1 e 2...*/
var numero = 1
{
    let numero = 2
    console.log('Dentro = ', numero)
}

console.log('Fora = ', numero)