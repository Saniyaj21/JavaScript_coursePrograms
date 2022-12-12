let n = 5;
n = Number.parseInt(n);

console.log("While loop")
let i = 0;
while (i < n) {
    console.log(i)
    i++
}

console.log("Do while loop")
let p = 5;
p = Number.parseInt(p);
let j = 0;  // do while runs for atleast one time 
do {
    console.log(j);
    j++;
} while (j < p)