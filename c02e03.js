/*
Chessboard
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
Passing this string to console.log should show something like this:
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let altura;
let largura;

rl.question("Digite o valor da altura do grid: ", (resposta) => {
    altura = parseFloat(resposta);
    
    rl.question("Digite o valor da largura do grid: ", (resposta) => {
        largura = parseFloat(resposta);
        
        if (isNaN(altura) || isNaN(largura)) {
            console.log("Isso não é um número válido!");
        } else {
            criarTabuleiro(altura, largura);
        }
        rl.close();
    });
});

function criarTabuleiro (altura, largura) {
    criarLinha(altura, largura);
}

function criarLinha(altura, largura) {
    for (let indice = 1; indice <= altura; indice++) {
        if (indice % 2 !== 0 ? preencherLinhaImpar(largura) : preencherLinhaPar(largura));
    }
}

function preencherLinhaImpar(largura) {
    for (let contador = 1; contador <= largura; contador++) {
        if (contador % 2 == 0) {
            process.stdout.write(" ");
        } else {
            process.stdout.write("#");
        }
    }
    console.log();
}

function preencherLinhaPar(largura) {
    for (let indice = 1; indice <= largura; indice++) {
        if (indice % 2 == 0) {
            process.stdout.write("#");
        } else {
            process.stdout.write(" ");
        }
    }
    console.log();
}

criarTabuleiro();