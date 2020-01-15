


var age = prompt("What age is the patron?");

if (age < 0) {
    console.log("This is an error. Check ID again.")
} else if (age < 18) {
    console.log("Sorry, you are not old enough to enter the venue");
    alert("Sorry, you are not old enough to enter the venue")
} else if (age >= 18 && age < 21) {
    console.log("You may enter the venue but you cannot drink");
    alert("You may enter the venue but you cannot drink")
} else if (age === 21) {
    console.log("happy 21st birthday!!!")
} else if (age % Math.sqrt(age) === 0) {
    console.log("perfect square!")
} else {
    console.log("You may entet the venue and drink.")
    alert("You may entet the venue and drink.")
}
