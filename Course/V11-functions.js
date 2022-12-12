function Sum(a, b) {
    return a + b;
}

// const Sum2 = (x,y) => {  This is also valid
const Sum2 = () => {
    return x + y;
}



let x = 5;
x = Number.parseInt(x);
let y = 52;
y = Number.parseInt(y);
console.log("Sum of ", x, "and", y, "is =", Sum(x, y));
console.log("Sum of ", x, "and", y, "is =", Sum2(x, y));