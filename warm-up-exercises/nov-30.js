// 1
function avgTopScores(scores){
    let desc = scores.sort( (a, b) => (b - a) ); // sort descending

    let sum = 0;
    for(let i = 0; i <= 2; i++){ // only top 3
        sum += desc[i];
    }
    return (sum/3).toFixed(2);
}

let scores = [300,150,180,200,190,275];
console.log(avgTopScores(scores)); // should be 258.33

// 2
function multipleOfThreeOrFive(score){
    return score % 3 === 0 || score % 5 === 0;
}


console.log(" ");
console.log(multipleOfThreeOrFive(10) ); // should be true
console.log(multipleOfThreeOrFive(9) );  // should be true
console.log(multipleOfThreeOrFive(15) );  // should be true
console.log(multipleOfThreeOrFive(19)); // should be false

// 3
// IN -> "TheBestBowlingPlaceEver"
// OUT -> "the best bowling place ever"
function toLower(str){
    let newStr = "";
    for(let char of str){
        if(char === char.toUpperCase()){  // if already upper case
            newStr += " ";
            newStr += char;
        } else {
            newStr += char
        }
    }
    return newStr.toLowerCase().trim();
}

console.log(" ");
let testStr = toLower("TheBestBowlingPlaceEver");
console.log(testStr);  // should be "thebestbowlingplaceever"

// 4
function returnType(input){
    return (typeof input);
}

let score = 109;
let name = "bowling Is Fun";
let isBowlingFun = true;
let players = ["tom", "jerry", "Garfield"];

console.log(" ");
console.log(returnType(score));  // should be number
console.log(returnType(name));  // should be string
console.log(returnType(isBowlingFun)); // should be boolean
console.log(returnType(players)); // should be object

// 5
function executeAll(scores, score, str, input){
    console.log(avgTopScores(scores));
    console.log(multipleOfThreeOrFive(score));
    console.log(toLower(str));
    console.log(returnType(input));
}

let scores2 = [111,222,223,90,89,37];
let score2 = 47;
let testStr2 = "JustInTHomasSebASTian";
let testInput = false;

console.log(" ");
executeAll(scores2, score2, testStr2, testInput); // 185.33 , false, "justinthomassebastian", boolean

// 6
//let myFunction (firstName, lastName) return firstName + lastName; };

function myFunction (firstName, lastName){
    return firstName + " " + lastName;
}

let fName = "Justin";
let lName = "Sebastian";
console.log(" ");
console.log(myFunction(fName, lName)) // "Justin Sebastian";

//function thatsNotMyName(name){ if(name = "Laura"){ return "that's me!, I'm " + "name"} } else { return "that's not my name" }

function thatsNotMyName(name){
    if(name === "Laura"){
        return "that's me!, I'm " + name;
    } else {
        return "that's not my name";
    }
}

console.log(" ");
console.log(thatsNotMyName("Laura"));  // "that's me!, I'm Laura"
console.log(thatsNotMyName("Thomas")); // "that's not my name