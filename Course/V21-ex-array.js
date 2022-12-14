// Q.1 take user input in array

// prompt is not working
let arr = [23, 4];
arr.push(34);
console.log(arr);

// Q2. multiply all items of Array
let a2 = [1, 3, 4, 5, 8];
let mul = (a, b) => {
    return a * b;
}
console.log(a2.reduce(mul));