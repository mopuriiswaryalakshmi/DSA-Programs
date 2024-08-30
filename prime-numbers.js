// Print all prime numbers

function primeNumbers(input){
	if(input < 1) return false
	if(input==2 || input==3) return true
	if(input%2 == 0 || input % 3 == 0) return false
		for(i=5; i < Math.sqrt(input); i++){
			if(input % i == 0) {
				primeNumbers.push(i)
			}
		}
	return primeNumbers
}

console.log(primeNumbers(30))
