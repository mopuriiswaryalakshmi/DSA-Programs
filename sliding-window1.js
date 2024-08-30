function getMaxSubarrayWithK(arr, k){
	// Fix 1st window
	let sum = 0
	let ans = 0
	for(i=0; i<k; i++){
		sum += arr[i]
	}
	for(i=k; i<arr.length; i++){
		sum += arr[i] - arr[i-k]
		ans = Math.max(ans, sum)
	}
	return ans
}

// sum + outgoing - incoming
// sum, max ans
console.log(getMaxSubarrayWithK([1,5,4,2,9,9,9], 3))