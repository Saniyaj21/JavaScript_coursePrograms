let myArray = [1, 3, 5, 6, 'String', 8.98]
//console.log(myArray)
for (let i in myArray) {
    console.log(myArray[i]);
}

console.log(myArray.length);

// insert delete and change value
myArray.push("Added") //inserting

console.log(myArray) //changing the value
myArray[2] = 30;
console.log(myArray)

// deleting
myArray.pop("Added")
console.log(myArray)