function countVowels(str){
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for(let char of str){
        if(vowels.includes(char.toLowerCase())){
            count++;
        }
    }
    return count;
}

let test = "helicopter";

console.log(countVowels(test));