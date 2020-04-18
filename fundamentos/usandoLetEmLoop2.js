const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i)
    })
}
/* Aqui diferente o vimos com var ele retorna o valor que se esperava,
um comportamento normal , resultado 2 e 8*/
funcs[2]()
funcs[8]()