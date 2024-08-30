// // TC: 0(N)
function getCharValue(input) {
	let result = ''
    for(let char of input) {
			if(char >= 'a' && char <= 'z') {
				result += String.fromCharCode(char.charCodeAt(0)-32)
			} else {
				result += String.fromCharCode(char.charCodeAt(0)+32)
			}
    }
		console.log(result)
    return result
}
getCharValue('JavaScrIpt')

// 'a' : 97 ,   'A': 65  ---> Diff A - a => 97 - 65 = 32
// 'b' : 98 ,   'B': 66  ---> Diff B - a => 98 - 66 = 32

// Get the Unicode of the first character in a string: -> text.charCodeAt(0); => 65
// How to convert Unicode values to characters: -> let char = String.fromCharCode(65);


// TC: 0(1) .. updating input 
// function getCharValue(str) {
// 		input = str
//     for(i = 0; i < input.length; i++) {
// 			if(input[i] >= 'a' && input[i] <= 'z') {
// 				input[i] = String.fromCharCode(input.charCodeAt(i)-32)
// 				console.log(input.charCodeAt(i))
// 				console.log(String.fromCharCode(input.charCodeAt(i)-32))
// 			} else {
// 				input[i] = String.fromCharCode(input.charCodeAt(i)+32)
// 			}
//     }
// 		console.log(input)
//     return input
// }
// getCharValue('JavaScrIpt')
/* changing same input is constant time O(1) 
 char = String.fromCharCode(char.charCodeAt(0)-32)
*/

//For O(1) TC
// convert string to char array
// solve using char array
// convert char array to back string
