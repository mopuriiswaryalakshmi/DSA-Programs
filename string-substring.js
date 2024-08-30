function isPalindrome(str, l, r){
	while(l < r){
		if(str[l] != str[r]){
			console.log(false)
			return false
		}
		l++
		r--
	}
	return true
}

str = "abmadamtam"
console.log(isPalindrome(str, 2, 6))
