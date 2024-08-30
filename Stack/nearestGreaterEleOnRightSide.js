function nearestGreatestElementOnRight(arr) {
    let ans = new Array(arr.length).fill(-1)
    let stack = []

    for(i = arr.length-1; i >=0; i--) {
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
let output = nearestGreatestElementOnRight(arr)
console.log(output) // [5, 10, 10, -1, -1]
