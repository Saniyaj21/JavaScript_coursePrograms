const prompt = require('prompt-sync')({ sigint: true });  //For using the prompt




let a = prompt("Enter your age : "); //always takes a string value
a = Number.parseInt(a); // converting to int

// if statement in js
if (a <= 0) {
    console.log("Enter a valid age : ");
}

else if (a <= 18) {
    console.log("You are a junior ")
}
else {
    console.log("You are a senior ");
}

// Switch StaticRangement

let choice = prompt("Enter a choice from 1 to 5 :");
choice = Number.parseInt(choice)
switch (choice) {
    case 1:
        console.log("You entered One");
        break;
    case 2:
        console.log("You entered Two");
        break;
    case 3:
        console.log("You entered Three");
        break;
    case 4:
        console.log("You entered Four");
        break;
    case 5:
        console.log("You entered Five");
        break;
    default:
        console.log("Enter valid choice :")
}

