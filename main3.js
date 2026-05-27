let n = 6;

console.log("Equilateral Triangle Pattern");
console.log("----------------------------");

for (let i = 1; i <= n; i++) {

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