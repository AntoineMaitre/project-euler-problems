// Let's initialize the Fibonacci sequence array
let fibonacciSeq = [];
fibonacciSeq.push(1);
fibonacciSeq.push(2);
// Let's init the sum
let sum = 2;

function getFibonacciEvenSequenceSum(limit) {
    for (let i = 2; i < limit + 2; i++) {
        // Let's evaluate the current sequence number
        const currentSeqNb = fibonacciSeq[i - 1] + fibonacciSeq[i - 2];
        // Add our current value for further processing
        fibonacciSeq.push(currentSeqNb);
        // And add it to our sequence only if it's even
        if (currentSeqNb % 2 === 0) {
            sum += currentSeqNb;
        }
    }

    console.log('Result is: ' + sum);
}

getFibonacciEvenSequenceSum(4e6);
