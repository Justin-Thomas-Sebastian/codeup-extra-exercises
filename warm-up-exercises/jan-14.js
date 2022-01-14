// Make a program that filters through this array:
// ["Ryan", "Kieran", "Jason", "Mary", "Jo", "Jake"]
// and returns a new array that contains only those whose name have only 4 letters in them.

let names = ["Ryan", "Kieran", "Jason", "Mary", "Jo", "Jake"];

let result = names.filter(checkLength);

function checkLength(name){
    return name.length === 4;
}

console.log(result);
