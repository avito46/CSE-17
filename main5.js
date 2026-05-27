let n = 5;

console.log("Number Pattern");
console.log("--------------");

for (let i = 1; i <= n; i++) {

    let row = "";

    for (let j = 1; j <= i; j++) {
        row += j;
    }

    console.log(row);
}

console.log("--------------");
console.log("Pattern Completed");