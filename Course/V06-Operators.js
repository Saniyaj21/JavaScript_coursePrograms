// Operators in js
let a = 22;
let b = 4;

// arithmetic operator
console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a / b = ", a / b);
console.log("a * b = ", a * b);
console.log("a % b = ", a % b);
console.log("a ** b = ", a ** b);

console.log("a ++ = ", a++);
console.log(a)
console.log("++a = ", ++a);
console.log(a)
console.log("a -- = ", a--);
console.log(a)
console.log("--a = ", --a);
console.log(a)

// Assignment Operators
console.log("Assignment Operator")
let c = 7
c = 70;
console.log("C = ", c)
console.log(c += 5);
console.log(c -= 5);
console.log(c *= 5);
console.log(c /= 5);

// Comparison Operators
let d = 8;
let e = 8;
console.log(d == e);
console.log(d != e);

e = "8"
console.log(d == e); // no matter what the varialbe tyle is 
console.log(d === e);  // check for same type
console.log(d !== e);
// < > >= <=

// Logical Operators

let x = 5;
let y = 6;

console.log("Logical Operators")
console.log(x == 5 && y == 6);
console.log(x == 5 && y != 6);
console.log(x == 5 || y != 6);
console.log(!true);

// ternary operator
let age = 19;
console.log("You can", age < 18 ? "not drive" : "drive")  // if true then not drive else drive

// Bitwise Operators


