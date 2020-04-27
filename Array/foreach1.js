const aprovados = ['Agatha', 'Alan', 'Daniel', 'Raquel']

aprovados.forEach(function (nome, indice) {

    console.log(`${indice + 1})${nome}`)
})// Percorrendo o array e imprimindo indice e nome....

aprovados.forEach(nome => console.log(nome))// imprimindo os nomes do array...

const exibirAprovados = aprovados => console.log(aprovados)
aprovados.forEach(exibirAprovados)// Imprimindo nomes do array...