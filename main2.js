let n = 7;

console.log("Diamond Star Pattern");
console.log("---------------------");

// Upper Part
for (let i = 1; i <= n; i++) {

    let spaces = "";
    let stars = "";

    // Print spaces
    for (let j = 1; j <= n - i; j++) {
        spaces += " ";
    }

    // Print stars
    for (let k = 1; k <= (2 * i - 1); k++) {
        stars += "*";
    }

    console.log(spaces + stars);
}

// Lower Part
for (let i = n - 1; i >= 1; i--) {

    let spaces = "";
    let stars = "";

    // Print spaces
    for (let j = 1; j <= n - i; j++) {
        spaces += " ";
    }

    // Print stars
    for (let k = 1; k <= (2 * i - 1); k++) {
        stars += "*";
    }

    console.log(spaces + stars);
}

console.log("---------------------");
console.log("Diamond Pattern Completed");