let test1 = "42958372";
let test2 = "917485";

function strSum(str){
    let sum = 0;
    for(let char of str){
        let num = Number(char);
        sum += num;
    }
    return sum;
}

console.log(strSum(test1)); // should be 40
console.log(strSum(test2)); // should be 34