/*
Write a function that returns an object displaying any number/letter
that appears consecutively in a string of numbers.
The object should display how many times that letter/number appears consecutively

INPUT: “42992338111134”
EXPECTED OUTPUT: {9: 2, 3: 2, 1: 4}
---
INPUT: “BQAAIPPPPFFA”
EXPECTED OUTPUT: {a: 2, p: 4, F: 2}
*/

let test1 = "42992338111134";
let test2 = "BQAAIPPPPFFA";

function countConsecutiveDuplicates(str){
    let map = {};
    for(let i = 0; i < str.length - 1; i++){
        if(str[i] === str[i + 1]){
            if(map.hasOwnProperty(str[i])){
                map[str[i]] += 1;
            } else {
                map[str[i]] = 2;
            }
        }
    }
    return map;
}

console.log(countConsecutiveDuplicates(test1));
console.log(countConsecutiveDuplicates(test2));