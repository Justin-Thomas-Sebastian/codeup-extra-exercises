// write a function that counts the number of duplicate characters.
//     example input: "adsjfdsfsfjsdjfhacabcsbajda"
// expected output: { a: 5, b: 2, c: 2, d: 4, f: 4, j: 4, s: 5 }

function countDuplicateCharacters(str){
    let strSet = new Set();
    let strObj = {};

    for(let char of str){
        if(!strObj.hasOwnProperty(char)){
            strObj[char] = 1;
        } else {
            strObj[char] += 1;
        }
    }
    return strObj;
}

let test = "adsjfdsfsfjsdjfhacabcsbajda";
console.log(countDuplicateCharacters(test));