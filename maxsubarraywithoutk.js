function maxSubarray(nums) {
    sum = 0 
    ans = Number.NEGATIVE_INFINITY
    for (i = 0; i < nums.length; i++) {
      sum += nums[i]
      ans = Math.max(ans, sum)
    }
    if(sum < 0) {
      sum = 0
    }
    return ans
  }
  console.log(maxSubarray([4,-1,2,1]))
  console.log(maxSubarray([-2,1,-3,4,-1,2,1,-5,4]))