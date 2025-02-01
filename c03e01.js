/*
MINIMUM
The previous chapter introduced the standard function Math.min that returns its smallest argument.
We can write a function like that ourselves now.
Define the function min that takes two arguments and returns their minimum
*/

function retornaMenorNumero(a, b) {
    return a < b ? a : b;
}

console.log(retornaMenorNumero(3, 5));