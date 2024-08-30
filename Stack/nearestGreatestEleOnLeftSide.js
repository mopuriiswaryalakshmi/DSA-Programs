function nearestGreatestElementOnLeft(arr) {
    let ans = new Array(arr.length).fill(-1)
    let stack = []

    for(i=0; i < arr.length; i++) {
        while(stack.length > 0 && stack[stack.length-1] <= arr[i]) {
            stack.pop()
        }

        if(stack.length > 0) {
            ans[i] = stack[stack.length-1]
        }

        stack.push(arr[i])
    }
    return ans
}

let arr = [4, 5, 2, 10, 8]
let output = nearestGreatestElementOnLeft(arr)
console.log(output) // [-1, -1, 5, -1, 10]