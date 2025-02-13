/*
FizzBuzz
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
(This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you solved it, your labor market value just went up.)
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numero;

rl.question("Digite um número a ser verificado divisibilidade por 3 e por 5: ", (resposta) => {
    numero = parseFloat(resposta);

  if (isNaN(numero)) {
    console.log("Isso não é um número válido!");
  } else {
    
    for (let indice = 1; indice <= numero; indice++) {
        console.log(verificaFizBuzz(indice));
    }
  }

  rl.close();
});

const verificaFizBuzz = (numero) => {
    if (numero % 3 === 0 && numero % 5 === 0) return "FizzBuzz";
    if (numero % 3 === 0) return "Fizz";
    if (numero % 5 === 0) return "Buzz";
    return numero;
}

/*
const verificaFizzBuzz = (numero) => {
  let resultado = (numero % 3 === 0 ? "Fizz" : "") + (numero % 5 === 0 ? "Buzz" : "");

  switch (resultado) {
    case "FizzBuzz":
      return "FizzBuzz";
    case "Fizz":
      return "Fizz";
    case "Buzz":
      return "Buzz";
    default:
      return numero;
  }
};
*/