let arr = [10, 20, 30, 40, 50];

let searchElement = 40;

let found = false;

console.log("Searching Element in Array");

for (let i = 0; i < arr.length; i++) {

    console.log("Checking Element = " + arr[i]);

    if (arr[i] === searchElement) {

        found = true;

        console.log("Element Found at Index " + i);

        break;
    }
}

if (found === false) {

    console.log("Element Not Found");
}

console.log("Search Program Completed");