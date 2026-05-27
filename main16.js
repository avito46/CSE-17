let arr1 = [11, 22, 33, 44, 55];

let arr2 = [];

console.log("Copying Array Elements");

for (let i = 0; i < arr1.length; i++) {

    arr2[i] = arr1[i];

    console.log("Copied Element = " + arr2[i]);
}

console.log("First Array = ");
console.log(arr1);

console.log("Second Array = ");
console.log(arr2);

console.log("Array Copy Program Finished");