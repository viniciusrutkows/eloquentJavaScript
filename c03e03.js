/*
BEAN COUNTING
You can get the Nth character, or letter, from a string by writing [N] after the string (for example, string[2]).
The resulting value will be a string containing only one character (for example, "b").
The first character has position 0, which causes the last one to be found at position string.length - 1.
In other words, a two-character string has length 2, and its characters have positions 0 and 1.
Write a function called countBs that takes a string as its only argument and returns a number that indicates how many uppercase B characters there are in the string.
Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase B characters).
Rewrite counts to make use of this new function.
*/

/*
variavelAlfanumerica = "string";

console.log(variavelAlfanumerica[2]);
*/

/*
function contaNumeroDeBs(alfanumerico) {

    let quantidadeDeBs = 0;

    for (let contador = 0; contador < alfanumerico.length; contador++) {

        if (alfanumerico[contador] === "B") {
            quantidadeDeBs += 1;
        }
    }

    console.log(quantidadeDeBs);
}

let alfanumerico = "não gosto de BBB.";

contaNumeroDeBs(alfanumerico);
*/

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let alfanumerico, caracterProcurado;

rl.question("Digite a palavra/frase a ser verificada: ", (resposta) => {
    alfanumerico = resposta;

    rl.question("Digite o caracter a ser procurado: ", (resposta) => {
        caracterProcurado = resposta;

        if (isNaN(alfanumerico) || isNaN(caracterProcurado)) {
            contaCaracteresProcurados(alfanumerico, caracterProcurado);
        } else {
            console.log("Isto não é uma string");
        }
        rl.close();
    });
});

function contaCaracteresProcurados(alfanumerico, caracterProcurado) {

    let quantidadeDeCaracteresProcurado = 0;

    for (let contador = 0; contador < alfanumerico.length; contador++) {

        if (alfanumerico[contador] === caracterProcurado) {
            quantidadeDeCaracteresProcurado += 1;
        }
    }

    console.log(`O caracter procurado: ${caracterProcurado} aparace : ` + quantidadeDeCaracteresProcurado + ` vezes.`);
}