let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let evenCount = 0;
let oddCount = 0;

for (let i = 0; i < arr.length; i++) {

    if (arr[i] % 2 === 0) {

        evenCount++;

        console.log(arr[i] + " is Even");

    } else {

        oddCount++;

        console.log(arr[i] + " is Odd");
    }
}

console.log("Total Even Numbers = " + evenCount);
console.log("Total Odd Numbers = " + oddCount);

console.log("Program Finished");