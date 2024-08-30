function generatePermutations(arr) {
    const results = [];
    function backtrack(start) {
        if (start === arr.length) {
            results.push([...arr]); // Add a copy of the current permutation
            return;
        }
        for (let i = start; i < arr.length; i++) {

            
            // Swap the current element with the start element
            
            [arr[start], arr[i]] = [arr[i], arr[start]];

            console.log(`loop iiiiii-- ${i}`)
            console.log(`loop start--- ${start}`)

            // Recur to generate permutations for the next position
            backtrack(start + 1);

            // Backtrack: undo the swap
            [arr[start], arr[i]] = [arr[i], arr[start]];
        }
    }

    backtrack(0);
    return results;
}

// Example Usage
const array = [1, 2, 3];
console.log(generatePermutations(array));