function ParanthesesCheck(input){
	const stack = []
	const parantheses = {
		'(' : ')',
		'{' : '}',
		'[' : ']'
	}
	for(const str of input) {
		console.log(str)
		if(str in parantheses) {
			stack.push(str)
		} else if(Object.values(parantheses).includes(str)){
			 let topOpeningBraces = stack.pop()
			 if(stack.length === 0){
				return false
			 }
			 if(parantheses[topOpeningBraces] != str) {
				return false
			 }
		}
	}
	return stack.length === 0
}
const str1 = "{[()]}";
console.log(ParanthesesCheck(str1))

// 1st if it is opening add to stack - IF
// 2nd if it is closed bracket check with existing stack if that element is present - ELSE
// If present remove from stack  -- IF
// If not present return FALSE -- ELSE
// Check stack.length is 0 so it will return true
// push, pop, top
