// write a function that accepts a string
// and checks whether each character in the string is upperCase or lowerCase and
// returns "letter  [insert letter] is uppercase/lowercase", accordingly.
// Bonus: return "is not a character" if it's not a letter
//
// input example: "bJI*ENsd4fRAIR5VIrsRFA-ijgRar"
// output example:
//     b is lowercase
// J is uppercase
// I is uppercase
// * is not a letter

function checkUpperLower(str){

    let resultStr = "";

    for(let i = 0; i < str.length; i++){
        if( !(/[a-zA-Z]/).test(str[i])){   // checks whether char is a letter
            resultStr += str[i] + " is not a character.\n";

        } else if (str[i] === str[i].toUpperCase()){  // checks whether char is upper case
            resultStr += "letter " + str[i] + " is uppercase.\n";

        } else {  // checks whether char is lower case
            resultStr += "letter " + str[i] + " is lowercase.\n";
        }
    }
    return resultStr;
}

let test = "bJI*ENsd4f";
console.log(checkUpperLower(test));