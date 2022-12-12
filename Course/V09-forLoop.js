// For Loop in js

for (let i = 0; i < 5; i++) {
    console.log(i);
}

// sum of first 10 natural numbers
let b = 4;
b = Number.parseInt(b);
let sum = 0;
for (let i = 1; i <= b; i++) {
    sum += i;
}
console.log("Sum of first 10 natural numbers is : ", sum);

// for in loop
let obj = {
    sani: 99,
    shubha: 98,
    arif: 97
}
// let is a block level varialbe which can not be access out side of this loop
for (let i in obj) {
    console.log("Marks of ", i, "is ", obj[i]);
}

// for of loop
// it is works on iterable datatyes like string and array
for (let i of "SANIYAJ") {
    console.log(i);
}
