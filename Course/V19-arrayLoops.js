let num = [1, 2, 3, 45, 8, 6];

for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
}

num.forEach((element) => {
    console.log(element * element)
})

// Array.from   //used to convert html collection to array
let a = "Sani"
let arr = Array.from(a)
console.log(arr)

// FOR OF
for (let i of num) {
    console.log(i)
}
// FOR in
for (let i in num) {
    console.log(i)
}
