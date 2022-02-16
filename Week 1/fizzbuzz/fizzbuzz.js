"use strict";
exports.__esModule = true;
function fizzbuzz(x) {
    var i = 1;
    while (i != x + 1) {
        if (i % 3 == 0 && i % 5 == 0)
            console.log("Fizzbuzz");
        else if (i % 3 == 0)
            console.log("fizz");
        else if (i % 5 == 0)
            console.log("buzz");
        else
            console.log(i);
        i++;
    }
}
fizzbuzz(15);
