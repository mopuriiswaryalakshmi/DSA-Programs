function sumOfMaxMinusMinOfAllSubarrays(arr) {
    function calculateContribution(arr) {
        let n = arr.length;
        let contribution = new Array(n).fill(0);
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
                console.log("nextGreater=====")
                console.log(nextGreater)
            }
            stack.push(i);
        }

        stack = [];

        // Compute previous greater element index
        for (let i = 0; i < n; i++) {
            while (stack.length > 0 && arr[stack[stack.length - 1]] <= arr[i]) {
                stack.pop();
            }
            if (stack.length > 0) {
                prevGreater[i] = stack[stack.length - 1];
                console.log("prevGreater=====")
                console.log(prevGreater)
            }
            stack.push(i);
        }

        // Calculate max contribution
        for (let i = 0; i < n; i++) {
            let leftCount = i - prevGreater[i];
            let rightCount = nextGreater[i] - i;
            contribution[i] = arr[i] * leftCount * rightCount;
        }

        return contribution;
    }

/*
2       -> 2-2=0
2, 5    -> 5-2=3
2, 5, 3 -> 5-2 = 3
5       -> 5-5 = 0
5, 3   ->  5-3 = 2
3      ->  3 - 3 = 0


2*(1-3) = 4 => max 2 in - min 2 in
5*(4-1) = 15
3*(1-2) = -3
*/

// 0 -> 0-(-1) * (1-0) -> 1*1 = 1
// 1 -> 1-(-1) * (3-1) -> 2*2 = 4
// 2 -> 2-(1)  * (3-2) -> 1*1 = 1

// A[i]*((i-nearestGreaterLeft[i]) * (nearestGreaterRight[i]-i) - (i-nearestSmallestLeft[i]) * (nearestSmallerRigth[i]-i))


    function calculateMinContribution(arr) {
        let n = arr.length;
        let contribution = new Array(n).fill(0);
        let stack = [];
        let nextSmaller = new Array(n).fill(n);
        let prevSmaller = new Array(n).fill(-1);

        // Compute next smaller element index
        for (let i = n - 1; i >= 0; i--) {
            while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
                stack.pop();
            }
            if (stack.length > 0) {
                nextSmaller[i] = stack[stack.length - 1];
            }
            stack.push(i);
        }

        stack = [];

        // Compute previous smaller element index
        for (let i = 0; i < n; i++) {
            while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
                stack.pop();
            }
            if (stack.length > 0) {
                prevSmaller[i] = stack[stack.length - 1];
            }
            stack.push(i);
        }

        // Calculate min contribution
        for (let i = 0; i < n; i++) {
            let leftCount = i - prevSmaller[i];
            let rightCount = nextSmaller[i] - i;
            contribution[i] = arr[i] * leftCount * rightCount;
        }

        return contribution;
    }

    let maxContribution = calculateContribution(arr);
    let minContribution = calculateMinContribution(arr);

    // Calculate the sum of (max - min) for all subarrays
    let totalMax = maxContribution.reduce((sum, value) => sum + value, 0);
    let totalMin = minContribution.reduce((sum, value) => sum + value, 0);

    return totalMax - totalMin;
}

// Example usage:
let arr = [2, 5, 3];
let result = sumOfMaxMinusMinOfAllSubarrays(arr);
console.log(result); // Output will be the sum of (max - min) of all subarrays

// A[i]*((i-nearestGreaterLeft[i]) * (nearestGreaterRight[i]-i) - (i-nearestSmallestLeft[i]) * (nearestSmallerRigth[i]-i))
