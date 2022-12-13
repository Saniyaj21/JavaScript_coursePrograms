let num = [1, 2, 3, 4, 5, 6];
delete num[2];  // array length does not effect
console.log(num);
num[2] = 3;
let num_two = [34, 444, 54, 65];
let add = num + num_two;
console.log(add, typeof (add));

console.log(num_two.sort()); // this will sort based on first number(sort as alphabatically)

// for proper sorting we can give a function to .sort function

let compare = (a, b) => {
    return a - b;
}
console.log(num_two.sort(compare));

console.log(num.reverse());

// splice and slice

let spl = [10, 27, 37, 70, 80, 90];
console.log(spl.splice(1, 2, 121, 788)); //1-from delete 2-delete this much remaining add them
console.log(spl)

// slice(start,end)   and creates a new array
let newArr = num.slice(2, 5);
console.log(newArr)

