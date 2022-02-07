const fruits = ["cantaloupe", "orange", "date", "elderberry", "ugli fruit", "pineapple"];

const customers = [
    {
        name: "Fred",
        age: 58,
        occupation: "Police Officer",
        noOfPurchases: 4
    },
    {
        name: "Samantha",
        age: 54,
        occupation: "Teacher",
        noOfPurchases: 18
    },
    {
        name: "Charles",
        age: 38,
        occupation: "Librarian",
        noOfPurchases: 9
    }
];

const pets = [
    {
        name: 'Bud',
        age: 2,
        breed: 'Pug'
    },
    {
        name: 'Gabby',
        age: 10,
        breed: 'Retriever'
    },
    {
        name: 'Fred',
        age: 1,
        breed: 'Lab'
    },
    {
        name: 'Bowser',
        age: 2,
        breed: 'Pug'
    }
];

const family = [
    {
        name: "Pam",
        gender: "female",
        age: 29,
    },
    {
        name: "Amelie",
        gender: "female",
        age: 10,
    },
    {
        name: "Justin",
        gender: "male",
        age: 32,
    },
];

// Create an array of the first letters of each fruit

let firstLetterOfFruit = fruits.map((fruit) => fruit[0]);

console.log(firstLetterOfFruit);


// Create array of user objects based on the customers array of objects
// (each user object should just have name and age properties)

let customersNameAge = customers.map((customer) => {
    return {
        name: customer.name,
        age: customer.age
    }
});

console.log(customersNameAge);

// Create an array of civil servant customers (teachers and police officers)
// containing the same properties as the objects on the customers objects

let civilServants = customers.filter((customer) => {
    return customer.occupation === "Police Officer" || customer.occupation === "Teacher";
});

console.log(civilServants);

// Determine the average age of all the customers
let totalAge = customers.reduce((total, current) => {
    return total += current.age;
}, 0);

let avgAge = totalAge / customers.length;
console.log(totalAge);

// Create a function makeSuperPet()
// that takes in the pets array as input and
// returns a single pet object with the following shape...
//
// {
//     name: ALL_PET_NAMES_CONCATENATED_INTO_A_SINGLE_STRING,
//         age: THE_TOTAL_OF_ALL_PET_AGES,
//     breed: THE_FIRST_LETTERS_OF_ALL_PET_BREEDS_CONCATENATATED_INTO_A_SINGLE_STRING
// }

function makeSuperPet(pets) {
    return pets.reduce((superPet, pet) => {
        return {
            name: superPet.name + pet.name,
            age: superPet.age + pet.age,
            breed: superPet.breed + pet.breed[0]
        }
    }, {name: "", age: 0, breed: ""});
}

console.log(makeSuperPet(pets));

// Create a function that takes in an array of pets
// and returns an array of the length of first names for pugs only.
// Your output for the given input should be [3, 6] for 'Bud' and 'Bowser'

function getLengthNameOfPug(pets){
    return pets.filter(pet => pet.breed === "Pug").map(pet => pet.name.length);
}

console.log(getLengthNameOfPug(pets));


// Create a function getFemaleFamilyMembers()
// that when given the family variable as an argument,
// returns an array of female family member names

function getFemaleFamilyMembers(family){
    return family.filter( person => person.gender === "female").map( female => female.name);
}

console.log(getFemaleFamilyMembers(family));

// Create a function makeLongPetString() that when given the variable of pets,
// returns a string of all property values with dashes separating each property value

function makeLongPetString(pets){
    return pets.reduce( (superPet, pet) => {
        return superPet += `${pet.name}-${pet.age}-${pet.breed}-`;
    }, "");
}

console.log(makeLongPetString(pets));

// Create a function that when given an array of first names,
// returns an array of the same names with a last name of Smith

// input = ['Sally', 'Fred', 'Steve']
// output = ['Sally Smith', 'Fred Smith', 'Steve']

function appendSmith(names){
   return names.map( name => name + " Smith");
}

console.log(appendSmith(['Sally', 'Fred', 'Steve']));

// Create a function that when given an array of numbers,
// return the sum of the even numbers

let testNumArr = [0,1,2,3,4,5,6,7,8,9];

function sumOfEvenNumbers(nums){
    return nums.filter(num => num % 2 === 0).reduce( (a, b) => a + b);
}

console.log(sumOfEvenNumbers(testNumArr));

// Create a function that when given an array of numbers,
// return the sum of all numbers evenly divisible by 10

let testNumArr2 = [];
for(let i = 1; i <= 100; i++){  // creates test array of numbers 1 - 100
    testNumArr2.push(i);
}

function sumOfNumsDivisibleByTen(nums){
    return nums.filter( num => num % 10 === 0).reduce( (a, b) => a + b);
}

console.log(sumOfNumsDivisibleByTen(testNumArr2));

// Create a function that when given an array of names,
// return a string of all the first letters of each name

let names = ["Justin", "Thomas", "Tuvera", "Sebastian"];

function abbreviateNames(names, index){
   return names.map( name => name[0]).reduce( (a , b)  => a + b);
}

console.log(abbreviateNames(names));

// Create a function that when given an array of values,
// returns an array of only the truthy values

let testArrValues = [true, false, 1, 0, undefined, "", null, {name: "bob"}]; // output: [true, 1, {name: bob}]

function returnTruthy(arr){
    return arr.filter(element => !!element)
}

console.log(returnTruthy(testArrValues));

// Create a function that when given an object,
// returns the property values as an array of elements

let testObj = {
    name: "justin",
    age: 30,
    gender: "male"
}
function returnProperties(obj){
    // let propArr = []
    // for(let prop in obj){
    //     propArr.push(prop);
    // }
    // return propArr;

    /**   OR   **/

    return Object.keys(obj);
}

console.log(returnProperties(testObj));


// Create a function that when given three arguments:
// a min num, a max num, an array of nums
// will return the array of nums that are only between the min and max values, inclusive

function returnWithinBounds(min, max, nums){
    return nums.filter(num => (num >= min && num <= max))
}

console.log(returnWithinBounds(10, 40, testNumArr2));


// Create a function that when given an array of strings,
// returns an array of objects with properties for the given string value
// and the length of the string and the string without vowels (not including y)

function foo(strArr){
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    return strArr.map( str => {
        let charArr = str.split("");
        let noVowelsArr = charArr.filter(char => !vowels.includes(char));
        return {
            value: str,
            strLength: str.length,
            withoutVowels: noVowelsArr.join("")
        }
    });
}

console.log(foo(names));











