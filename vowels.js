// function vowelFrequecy(input) {
//     const vowels = ['a', 'e', 'i', 'o', 'u']
//     frequncyCount = 0
//     for(let char of input) {
//         if(vowels.includes(char)) {
//             frequncyCount++
//         }
//     }
//     console.log(frequncyCount)
//     return frequncyCount
// }

// vowelFrequecy('elephant')

function findVowelsWithIndices(input) {
	frequncyCount = 0
  const vowels = 'aeiou'
	for(let char of input){
		if(vowels.indexOf(char) !== -1){
			frequncyCount++
		}
	}
	return frequncyCount
}
console.log(findVowelsWithIndices('elephant'))
// console.log(findVowelsWithIndices('Hello World!'))

