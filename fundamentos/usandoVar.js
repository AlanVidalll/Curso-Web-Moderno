
// Criamos a variável var dentro de 4 blocos de código....
{ { { { var sera = 'será???' } } } }
// em outras linguagens essa variável e inacessivel, mais a var nesse caso ira imprimir normal...
console.log(sera)


// Aqui foi criada uma variável var dentro de uma função
function teste (){
 var local = 123

}
// quando se cria uma variável var dentro da função ela nao é acessivel fora da função gerando erro...
teste()
console.log(local)