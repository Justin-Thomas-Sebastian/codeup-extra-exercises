"use strict"

// getToDestination part 1
function getToDestination(age, isInsured, hasCar, canGetRideshare){
    if(age >= 16 && isInsured && hasCar ){
        console.log("You can use your own vehicle");
    } else if ( (age < 16 && !isInsured) || (!hasCar && canGetRideshare) ){
        console.log("You can use a rideshare service");
    } else {
        console.log("Call a friend for a ride.");
    }
}

getToDestination(17, true, true, false); // should output "You can use your own vehicle"
getToDestination(18, false, false, true); // should output "You can use a rideshare service"

// getToDestination part 2. more to follow