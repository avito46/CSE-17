let arr = [64, 34, 25, 12, 22, 11, 90];

console.log("Bubble Sort Program");
console.log("-------------------");

console.log("Original Array:");
console.log(arr);

for (let i = 0; i < arr.length - 1; i++) {

    console.log("-------------------");
    console.log("Pass " + (i + 1));

    for (let j = 0; j < arr.length - 1 - i; j++) {

        console.log("Comparing " + arr[j] + " and " + arr[j + 1]);

        if (arr[j] > arr[j + 1]) {

            console.log("Swapping " + arr[j] + " and " + arr[j + 1]);

            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }

    console.log("Array After Pass " + (i + 1) + ":");
    console.log(arr);
}

console.log("-------------------");
console.log("Sorted Array:");
console.log(arr);

console.log("-------------------");
console.log("Program Completed");