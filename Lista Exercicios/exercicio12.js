/*12) Faça um algoritmo que calcule o fatorial de um número.*/

function fatorial(valor) {
      
 return valor<2 ? 1 : valor*fatorial(valor-1)
  
} 
console.log(fatorial(6)) 