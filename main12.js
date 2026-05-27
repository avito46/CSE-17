let arr = [12, 45, 67, 23, 89, 34];

let largest = arr[0];

console.log("Checking Largest Element");

for (let i = 0; i < arr.length; i++) {

    console.log("Current Element = " + arr[i]);

    if (arr[i] > largest) {

        largest = arr[i];

        console.log("New Largest Element Found = " + largest);
    }
}

console.log("Largest Element in Array = " + largest);

console.log("Program Ended");