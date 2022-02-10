// Morning Warmup:
// Write a function that removes any duplicates from an array.
// Input: [2,3,5,8,3,1,2,6,3,2,7,8,2,4,7]
// expected output: [2,3,5,8,1,6,7,4]

// using for of
function removeDuplicates(arr){
    let unique = [];
    for (let num of arr){
        if(!unique.includes(num)){
            unique.push(num);
        }
    }
    return unique;
}

// using reduce
// function removeDuplicates(arr){
//     return arr.reduce((unique, current) => {
//        if (!unique.includes(current)) {
//            unique.push(current);
//        }
//        return unique;
//    }, []);
// }

// using set
// function removeDuplicates(arr){
//     let unique = new Set();
//
//     for(let num of arr){
//         if(!unique.has(num)){
//             unique.add(num);
//         }
//     }
//     return unique;
// }

// let test = [2,3,5,8,3,1,2,6,3,2,7,8,2,4,7]
// console.log(removeDuplicates(test));