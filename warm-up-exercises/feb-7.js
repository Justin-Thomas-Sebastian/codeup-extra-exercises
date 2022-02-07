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
