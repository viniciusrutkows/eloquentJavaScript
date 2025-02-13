/*
Looping a triangle
Write a loop that makes seven calls to console.log to output the following
triangle:
#
##
###
####
#####
######
#######
It may be useful to know that you can find the length of a string by writing
.length after it.
let abc = "abc";
console.log(abc.length);
// → 3
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let alturaDoTriangulo;

rl.question("Digite o tamanho da altura do triangulo: ", (resposta) => {
    alturaDoTriangulo = parseFloat(resposta); // Modificando dentro da função

  if (isNaN(alturaDoTriangulo)) {
    console.log("Isso não é um número válido!");
  } else {
    console.log("Você definiu a altura em: " + alturaDoTriangulo);

    for (let indice = 1; indice <= alturaDoTriangulo; indice++) {
        console.log("#".repeat(indice));
    }
  }

  rl.close();
});