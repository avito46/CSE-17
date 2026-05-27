let arr = [10, 25, 30, 45, 50, 65];

let searchElement = 45;

let found = false;

console.log("Linear Search Program");
console.log("----------------------");

console.log("Array Elements:");

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log("----------------------");
console.log("Searching for Element = " + searchElement);
console.log("----------------------");

for (let i = 0; i < arr.length; i++) {

    console.log("Checking Element at Index " + i);

    if (arr[i] === searchElement) {

        found = true;

        console.log("Element Found at Index = " + i);

        break;
    }
}

if (found === false) {

    console.log("Element Not Found in Array");
}

console.log("----------------------");
console.log("Program Completed");