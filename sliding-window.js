function slidingWindow(nums,k) {
	// nums = [...new Set(arr)]; if uniq numbers
	sum = 0
	ans = Number.NEGATIVE_INFINITY
	for(i = 0; i < k; i++) {
		sum += nums[i]
	}
	
	start = 1;

	for(i = k; i < nums.length; i++) {
		sum = sum - nums[i-k] + nums[i]
		console.log(sum)
		ans = Math.max(ans, sum)
	}
	return ans
}

console.log(slidingWindow([1,5,4,2,9,9,9], 3))
//console.log(slidingWindow([10, 20, 10, 30, 5 ], 3))