// Find any duplicates in a string of numbers,
// return an object that shows which letters where duplicated how many times

let str = "BQAAIPPPPFFA";
// let str = "42992338111134";
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

console.log(map);