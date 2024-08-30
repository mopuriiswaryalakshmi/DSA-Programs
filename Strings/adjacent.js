function runLengthEncode(s) {
    let op = ''; // Initialize the output string
    let i = 0; // Initialize the index

    while (i < s.length) {
        let cc = s[i]; // Get the current character
        let count = 1; // Initialize count to 1 to account for the first occurrence

        // Count the number of consecutive occurrences of cc
        let np = i + 1;
        while (np < s.length && s[np] === cc) {
            count++;
            np++;
        }

        // Append the character and its count if count is more than 1
        op += cc;
        if (count > 1) {
            op += count;
        }

        // Move to the next different character
        i = np;
    }

    return op;
}

// Example usage
const input = "aaabbaadcc";
const output = runLengthEncode(input);
console.log(output); // Output: a3b2a2d2c2
