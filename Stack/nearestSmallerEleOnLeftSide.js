function nearestSmallerElementOnLeft(arr){
    let ans = []
    let stack = []

    for(let i=0; i<arr.length; i++) {
        while(stack.length > 0 && stack[stack.length-1] >= arr[i]) {
            stack.pop()
        }

        if(stack.length == 0) {
            ans[i] = -1
        } else {
            ans[i] = stack[stack.length-1]
        }

        stack.push(arr[i])

    }
    return ans
}

let arr = [4, 5, 2, 10, 8]
let output = nearestSmallerElementOnLeft(arr)
console.log(output) // [-1, 4, -1, 2, 2]