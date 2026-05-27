let n = 6;

console.log("Reverse Equilateral Triangle");
console.log("----------------------------");

for (let i = n; i >= 1; i--) {

    let spaces = "";
    let stars = "";

    // Create spaces
    for (let j = 1; j <= n - i; j++) {
        spaces += " ";
    }

    // Create stars
    for (let k = 1; k <= (2 * i - 1); k++) {
        stars += "*";
    }

    // Print row
    console.log(spaces + stars);
}

console.log("----------------------------");
console.log("Pattern Completed");