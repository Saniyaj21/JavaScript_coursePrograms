// map - filter - reduce
let arr = [2, 88, 34, 75, 32];

// map returns new array vs forEach loop does not
let a = arr.map((value, index, arrayy) => {
    console.log(value, index, arrayy)
})
console.log(arr)

// filter
let b = arr.filter((a) => {
    return a > 5
})
console.log(b)
console.log(arr)

// reduce method
let new_arr = [2, 4, 5, 43, 32, 2];
let ptr = new_arr.reduce((a, b) => {
    return a + b;
})
console.log(ptr)

// how reduce works
// take 2 and 4 return 6
// now take 6 and reduce index and take 5 return 11
// and so on

