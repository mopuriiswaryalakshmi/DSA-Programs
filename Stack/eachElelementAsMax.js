function countSubarraysWhereElementIsMax(arr) { // 2 5 3
    let n = arr.length;
    let result = new Array(n).fill(0); // Initialize result array with zeros
    let stack = [];
    let nextGreater = new Array(n).fill(n);
    let prevGreater = new Array(n).fill(-1);

    // Compute next greater element index
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length > 0 && arr[stack[stack.length - 1]] <= arr[i]) {
            stack.pop();
        }
        if (stack.length > 0) {
            nextGreater[i] = stack[stack.length - 1];
        }
        stack.push(i);
    }
    console.log("nextGreater=====")
    console.log(nextGreater)

    stack = [];

    // Compute previous greater element index
    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && arr[stack[stack.length - 1]] <= arr[i]) {
            stack.pop();
        }
        if (stack.length > 0) {
            prevGreater[i] = stack[stack.length - 1];
        }
        stack.push(i);
    }
    console.log("prevGreater=======")
    console.log(prevGreater)

    // Calculate the number of subarrays where each element is the maximum
    for (let i = 0; i < n; i++) {
        let leftCount = i - prevGreater[i];
        console.log("leftCount====")
        console.log(leftCount)
        let rightCount = nextGreater[i] - i;
        console.log("rightCount======")
        console.log(rightCount)
        result[i] = leftCount * rightCount;
    }
    console.log("result=====")
    console.log(result)
    return result;
}

// Example usage:
let arr = [2, 5, 3];
let output = countSubarraysWhereElementIsMax(arr);
console.log(output); // Output: [1, 4, 2, 1]

/*
2       -> 2-2=0
2, 5    -> 5-2=3
2, 5, 3 -> 5-2 = 3
5       -> 5-5 = 0
5, 3   ->  5-3 = 2
3      ->  3 - 3 = 0


2*(1 - 3) = 4 => max 2 in - min 2 in
5*(4-1) = 15
3*(1-2) = -3
*/
