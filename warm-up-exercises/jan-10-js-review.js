// Write a function that takes in two inputs and returns an array with those two inputs

function returnArr(input1, input2){
    return [input1, input2];
}

let testInput1 = 45;
let testInput2 = "Fried Chicken";

console.log(returnArr(testInput1, testInput2));  // should be [45, "Fried Chicken"]

// Write a function that takes in an array and another input and returns true if the value of the second input is an element in the first input array

function searchArr(arr, target){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return true;
        }
    }
    return false;
}

let testArr1 = [1,123,5346,12,78,87];
console.log(searchArr(testArr1, 88));  // should be false;
console.log(searchArr(testArr1, 123));  // should be true;

// Write a function that takes in an array of numbers and returns the lowest number. Assume only number element values and an array of at least two numbers.

function findLowest(numArr){
    let ascendingNumArr = numArr.sort( (a,b) => a - b);
    return ascendingNumArr[0];
}

let testArr2 = [22,11,55,77,99,55];
console.log(findLowest(testArr2));  // should be 11

// Write a function that takes in an array of numbers and returns the product of the lowest and highest number. Assume only number element values and an array of at least two numbers.

function returnProductLowestHighest(numArr){
    let ascendingNumArr = numArr.sort( (a,b) => a - b);
    return ascendingNumArr[0] * ascendingNumArr[ascendingNumArr.length - 1];
}

let testArr3 = [2,5,56,14];
console.log(returnProductLowestHighest(testArr3)); // should be 112