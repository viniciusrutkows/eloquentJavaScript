let tamanhoDoVetor = Math.floor(Math.random() * 10) + 1; // Garante pelo menos 1 elemento
let vetorDeNumeros = [];
let vetorInvertidoDeNumeros = [];

function criarListaPopuladaDeNumeros(inteiro) {
    for (let indice = 0; indice < inteiro; indice++) {
        vetorDeNumeros.push(Math.floor(Math.random() * 10));
    }
}

function criarMesmaListaMasListaInvertida(lista) {
    for (let indice = lista.length - 1; indice >= 0; indice--) {
        vetorInvertidoDeNumeros.push(lista[indice]);
    }
}

function inverterListaOriginal(vetor) {

    let variavelTemporaria;

    for (let indice = 0; indice < vetor.length / 2; indice++) {
        variavelTemporaria = vetor[indice];
        vetor[indice] = vetor[(vetor.length - 1) - indice];
        vetor[(lista.length - 1) - indice] = variavelTemporaria;
    }
}

criarListaPopuladaDeNumeros(tamanhoDoVetor);
console.log("Lista original:", vetorDeNumeros);
criarMesmaListaMasListaInvertida(vetorDeNumeros);
console.log("Lista invertida:", vetorInvertidoDeNumeros);
inverterListaOriginal(vetorDeNumeros, vetorInvertidoDeNumeros);
console.log("Lista invertida:", vetorDeNumeros);