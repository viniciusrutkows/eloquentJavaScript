/*
const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
    unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
};
ingredient(1, "can", "chickpeas");
ingredient(0.25, "cup", "tahini");
ingredient(0.25, "cup", "lemon juice");
ingredient(1, "clove", "garlic");
ingredient(2, "tablespoon", "olive oil");
ingredient(0.5, "teaspoon", "cumin");
}

hummus(2);
*/

/*
FUNCTION AS VALUE
let launchMissiles = function() {
    missileSystem.launch("now");
};
if (safeMode) {
    launchMissiles = function() {
    // do nothing
    };
}
*/

/*
DECLARATION NOTATION
function square(x) {
    return x * x;
}
*/

/*
ARROW FUNCTION
const roundTo = (n, step) => {
    let remainder = n % step;
    return n - remainder + (remainder < step / 2 ? 0 : step);
}
*/

/*
THE CALL STACK
function greet(who) {
    console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");
*/

/*
function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) ?? find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, "1");
}

console.log(findSolution(18));
*/

/*
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let galinhas;
let vacas;

rl.question("Digite a quantidade de galinhas: ", (resposta) => {
    galinhas = parseFloat(resposta);
    
    rl.question("Digite a quantidade de vacas: ", (resposta) => {
        vacas = parseFloat(resposta);
        
        if (isNaN(galinhas) || isNaN(vacas)) {
            console.log("Isso não é um número válido!");
        } else {
            printFarmInventory(galinhas, vacas);
        }
        rl.close();
    });
});

function printFarmInventory(vacas, galinhas) {
    let vacasString = String(vacas);
    while (vacasString.length < 3) {
        vacasString = "0" + vacasString;
    }

    console.log(`${vacasString} Vacas`);
    
    let galinhasString = String(galinhas);
    while (galinhasString.length < 3) {
        galinhasString = "0" + galinhasString;
    }
    console.log(`${galinhasString} Galinhas`);
}
*/

/*
function printZeroPaddedWithLabel(number, label) {

    let numberString = String(number);
    
    while (numberString.length < 3) {
        numberString = "0" + numberString;
    }

    console.log(`${numberString} ${label}`);
}

function printFarmInventory(cows, chickens, pigs) {
    printZeroPaddedWithLabel(cows, "Cows");
    printZeroPaddedWithLabel(chickens, "Chickens");
    printZeroPaddedWithLabel(pigs, "Pigs");
}

printFarmInventory(7, 11, 3);
*/

/*
const f = function(a) {
    console.log(a + 2);
};

function g(a,b) {
    return a * b * 3.5;
}

f(2);
console.log(g(3,5));
*/

/*
let h = a => a % 3

console.log(h(5));
*/

/*
function fibonacci(numero) {

    if (numero === 1) {
        console.log(0);
    }
    else {

        let antesessor = 0, sucessor = 1;

        console.log(antesessor);
        console.log(sucessor);

        for (let contador = 2; contador < numero; contador++) {

            let somaDosNumeros = antesessor + sucessor;

            console.log(somaDosNumeros);

            antesessor = sucessor;

            sucessor = somaDosNumeros;
        }
    }
}
const quantidadeDeNumeros = 13;

console.log(`A sequência dos ${quantidadeDeNumeros} numeros de Fibonacci são: `);

fibonacci(quantidadeDeNumeros);
*/

/*
function fatorial(n) {
return n === 1 ? 1 : n * fatorial(n - 1);
}
*/

/*
let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[2]);
// → 5
console.log(listOfNumbers[0]);
// → 2
console.log(listOfNumbers[2 - 1]);
// → 3
*/

/*
let doh = "Doh";
console.log(typeof doh.toUpperCase);
// → function
console.log(doh.toUpperCase());
// → DOH
*/

/*
let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// → [1, 2, 3, 4, 5]
console.log(sequence.pop());
// → 5
console.log(sequence);
// → [1, 2, 3, 4]
*/

/*
let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
    };
    console.log(day1.squirrel);
    // → false
    console.log(day1.wolf);
    // → false
    console.log(day1.events[0]);
    // → work
*/

/*
let anObject = {left: 1, right: 2};
console.log(anObject.left);
// → 1
delete anObject.left;
console.log(anObject.left);
// → undefined
console.log("left" in anObject);
// → false
console.log("right" in anObject);
// → true
*/

/*
const person = {
    isHuman: false,
    printIntroduction: function () {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    },
};

var eu = Object.create(person);

var cRone = Object.create(person);

eu.name = 'Vinicius'; // "name" is a property set on "me", but not on "person"
eu.isHuman = true; // Inherited properties can be overwritten

cRone.name = 'suiciniV';
cRone.isHuman = false;

var chaves = Object.keys(eu);

console.log(chaves);

console.log(cRone);

cRone = Object.assign(cRone, eu);

console.log(cRone);
*/

let journal = [
    {
        events: [
            "work", "touched tree", "pizza","running", "television"
        ],
        squirrel: false
    },
    {
        events: [
            "work", "ice cream", "cauliflower","lasagna", "touched tree", "brushed teeth"
        ],
        squirrel: false
    },
    {
        events: [
            "weekend", "cycling", "break", "peanuts","beer"
        ],
        squirrel: true
    },
]