function getInteiroAleatorioEntre(min, max) {

    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0
// Aqui a condição para sair do dowhile é -1, enquanto ele não gera -1 o while fica gerando números... 
do {

    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log('Opção escolhida foi = ' + opcao)
} while (opcao != -1)

console.log('Até a próxima')