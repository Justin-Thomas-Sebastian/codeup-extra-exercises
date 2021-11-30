"use strict"

// return true if odd, else false
function isOdd(num){
    if(num % 2 !== 0){
        return true;
    } else {
        return false;
    }
}
console.log("4 is odd: " + isOdd(4)); // should be false

// return true if even, else false
function isEven(num){
    if(num % 2 === 0){
        return true;
    } else {
        return false;
    }
}
console.log("6 is even: " + isEven(6)); // should be true

// returns input exactly as provided
function identity(input){
    return input; 
}

let identityTestStr = "Thomas";
console.log("Original: " + identityTestStr  + " | Returned: " + identity(identityTestStr)); 
// Original and Returned should both be "Thomas"

// true if num is five, else false
function isFive(num){
    if(num === 5){
        return true;
    } else {
        false;
    }
}

let isFiveTest = 5;
console.log(isFiveTest + " is 5: " + isFive(isFiveTest)); // should be true

//adds five to num input
function addFive(num){
    return Number(num) + 5;
}

let addFiveTest = 10;
console.log(`10 + 5 is: ${addFive(addFiveTest)}`); // should be 15


// CHALLENGE FUNCTION DRILLS

// return random number from min to max, inclusive
function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// returns first char of given string
function first(input){
    return input[0];
}
let firstTest = "Justin";
console.log("Testing first(): " + first(firstTest))  // should be 'J'

// returns last char of given string
function last(input){
    return input[input.length - 1];
}
let lastTest = "Justin";
console.log("Testing last(): " + last(lastTest));   // should be 'n'

// returns everything but the first character of a string
function rest(input){
    return input.slice(1);
}

let restTest = "Justin";
console.log("Testing rest(): " + rest(restTest)) // should be "ustin";

