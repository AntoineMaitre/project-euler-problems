// Let's initialize our array of multiples we search for as well as the sum
let multiplyBy = [3, 5];
let sum = 0;

function getMultipleBySum() {
    // Let's search for the multiples of our array of numbers
    for (let i = 1; i < 1000; i++) {
        if (i % multiplyBy[0] === 0 || i % multiplyBy[1] === 0) {
            sum += i;
        }
    }
    console.log(sum);
}

getMultipleBySum();

