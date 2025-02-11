/*
The sum of a range
The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers: console.log(sum(range(1, 10)));
Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to and including end.
Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.
As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements should go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure this also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let primeiroArgumento;
let ultimoArgumento;
let incrementadoDecrementado;
let somaDosNumeros = 0;
let listaDeNumerosInteiros = [];

rl.question("Digite o primeiro número inteiro da lista de números inteiros: ", (resposta) => {
    primeiroArgumento = parseFloat(resposta);
    
    rl.question("Digite o último número inteiro da lista de números inteiros: ", (resposta) => {
        ultimoArgumento = parseFloat(resposta);
        
        rl.question("Digite de quanto em quanto deverá ser incrementado/decrementado: ", (resposta) => {
            incrementadoDecrementado = parseFloat(resposta);
        
            fazerListaDeNumeros(primeiroArgumento, ultimoArgumento, incrementadoDecrementado);
            console.log("Lista dos números na lista: " + listaDeNumerosInteiros)
            somarNumerosDaLista();
            console.log("Soma dos números na lista: " + somaDosNumeros);
            
            rl.close();
        });
    });
});

function fazerListaDeNumeros(primeiroArgumento, ultimoArgumento, incrementadoDecrementado) {
    
    if (isNaN(primeiroArgumento) || isNaN(ultimoArgumento) || isNaN(incrementadoDecrementado)) {
        console.log("Isso não é um número válido!");
    } else {
        
        for (; incrementadoDecrementado > 0 ? primeiroArgumento <= ultimoArgumento : primeiroArgumento >= ultimoArgumento; primeiroArgumento += incrementadoDecrementado) {
            
            listaDeNumerosInteiros.push(primeiroArgumento);
        }
    }
}

function somarNumerosDaLista() {
    somaDosNumeros = 0;
    for (let contador = 0; contador < listaDeNumerosInteiros.length; contador++) {
        somaDosNumeros += listaDeNumerosInteiros[contador];
    }
}