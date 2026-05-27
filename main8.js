let n = 5;
let num = 1;

for (let i = 1; i <= n; i++) {

    let row = "";

    for (let j = 1; j <= i; j++) {
        row += num + " ";
        num++;
    }

    console.log(row);
}