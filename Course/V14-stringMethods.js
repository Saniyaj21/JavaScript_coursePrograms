let message = "This a message @ from Saniyaj";

console.log(message.length) //Return the length of the string in number
console.log(message.replace("Saniyaj", "Shubhajit")) //replace the first string with second string
console.log(message.indexOf('a')) //return the index of a whenever find a first time
console.log(message.toLowerCase()) //convert to lowercase
console.log(message.toUpperCase()) // convert to uppercase
console.log(message.split("@")) // split into array items with the devider string, @ in this case  
console.log(message.charAt(7)) //find the string at the giver index

console.log(typeof (message));

// String slicing
console.log(message.slice(2, 7));  //print 2 to 6
console.log(message.slice(4));  //print 4 to last

console.log(message.concat(" Adding this "));



