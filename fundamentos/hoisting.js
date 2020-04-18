
/* Isso aqui em varias linguagens daria problema, mas em javascript não
ele simplesnte gera um valor undefined na 1 impressão
mais ele consegue pegar a variável a mesmo declarada depois,
só não pega o valor mais reconhece como variável declarada, 
em outras linguagens  não se permite fazer isso... */
console.log('a =', a)
var a = 2
console.log('a =', a)


/* Com let ele gera erro , pois fala que a variável não foi declarada */
console.log('a =', b)
let b = 2
console.log('a =', b)

