function maxSubarray(arr){
    sum = 0
    ans = 0
    for(i=0; i<arr.length; i++) {
        sum += arr[i]
        ans = Math.max(ans, sum)
    }
    if(sum < 0) {
        sum = 0
    }
    return ans
}

console.log(maxSubarray([4,-1,2,1]))
//If negative make things zero
// IF non negative add to sum
// update ans with max