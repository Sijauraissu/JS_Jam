"use strict"

var i = 1; // Variable pour stocker le nombre
var resultElement = document.getElementById("result");

function fizzBuzz() {
    if (i <= 100) {
        var output = ""; // Variable pour stocker le résultat 

        if (i % 3 === 0 && i % 5 === 0) {
            output = "FizzBuzz";
        } else if (i % 3 === 0) {
            output = "Fizz";
        } else if (i % 5 === 0) {
            output = "Buzz";
        } else {
            output = i.toString();
        }

        resultElement.innerHTML += output + " ";

        i++;

        setTimeout(fizzBuzz, 50); // Appel avec un délai de 50 ms

    }
}

fizzBuzz();

