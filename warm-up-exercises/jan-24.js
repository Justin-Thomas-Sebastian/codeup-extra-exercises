let strNum = "42958372";

function strSum(str){
    let sum = 0;
    for(let char of str){
        let num = Number(char);
        sum += num;
    }
    return sum;
}

console.log(strSum(strNum));