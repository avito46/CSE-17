let n = 5;

console.log("Inverted Star Pattern");
console.log("----------------------");

for (let i = n; i >= 1; i--) {

    let row = "";

    for (let j = 1; j <= i; j++) {
        row = row + "* ";
    }

    console.log(row);
}

console.log("----------------------");
console.log("Pattern Completed");