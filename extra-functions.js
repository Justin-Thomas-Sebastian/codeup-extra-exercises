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

// check if given number is a multiple of five
function isMultipleOfFive(num){
    return num % 5 === 0;
}

let mult5test = 15;
console.log("15 is divisible by 5: " + isMultipleOfFive(mult5test)); // should be true 

// check if given character is a vowel
function isVowel(letter){
    let lowerLetter = letter.toLowerCase();
    switch(lowerLetter){
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            return true;
        default:
            return false;
    }
}

console.log("B is a vowel: " + isVowel("B")); // false
console.log("i is a vowel: " + isVowel("i")); // true
console.log("U is a vowel: " + isVowel("U")); // true

// function that return true if a string has a lower case letter
function hasLowerCase(str){
    for(let char of str){
        if(char === char.toLowerCase()){
            return true;
        }
    }
    return false;
}

console.log("'LkSJDKLJjLKJDF' has a lower case letter: " + hasLowerCase('LkSJDKLJjLKJDF')); // should be true
console.log("'JUSTIN' has a lower case letter: " + hasLowerCase('JUSTIN')); // should be false


// function that returns a reversed string
function reverseString(str){
    let newStr = "";

    for(let i = str.length - 1; i >= 0; i-- ){
        newStr += str[i];
    }

    return newStr;
}

console.log("The reverse of 'Justin' is: " + reverseString("Justin")); // should be "nitsuJ"


/************ CHALLENGE FUNCTION DRILLS  ******************/

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

