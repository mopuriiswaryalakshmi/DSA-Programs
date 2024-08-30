function printSubsequences(arr) {
    const n = arr.length;
    const totalSubsequences = 1 << n; // This is 2^n
    console.log(`totalSubsequences: ${totalSubsequences}`)
    for (let i = 0; i < totalSubsequences; i++) {
        let subsequence = [];

        for (let j = 0; j < n; j++) {
            // Check if the j-th bit is set in the i-th bitmask
            console.log(`1 << j===== i ${i} ; j ${j}  i<<j ${1 << j}`)
            if (i & (1 << j)) {
                console.log(`inside--- ${arr[j]}`)
                subsequence.push(arr[j]);
            }
        }

        // Print the current subsequence
        console.log(subsequence);
    }
}

// Example usage
const array = [1, 2, 3];
printSubsequences(array);