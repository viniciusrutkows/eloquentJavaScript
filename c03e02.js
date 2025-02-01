/*
RECURSION
We’ve seen that we can use % (the remainder operator) to test whether a number is even or odd by using % 2 to see whether it’s divisible by two.
Here’s another way to define whether a positive whole number is even or odd:
Zero is even.
One is odd.
For any other number N, its evenness is the same as N - 2.
Define a recursive function isEven corresponding to this description.
The function should accept a single parameter (a positive, whole number) and return a Boolean.
Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
*/

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numero;

rl.question("É impar? ", (resposta) => {
    numero = parseFloat(resposta);

    if (isNaN(numero)) {
        console.log("Isso não é um número válido!");
    } else {

        console.log(ehPositivo(numero));
    }

    rl.close();
});
function ehPositivo(numero) {
    return numero >= 0 ? ehImpar(numero) : `${numero}` + " é negativo."
}

function ehImpar(numero) {
    return numero <= 1 ? verificaNumero(numero) : ehImpar(numero - 2);
}

function verificaNumero(numero) {
    return numero === 1 ? true : false;
}