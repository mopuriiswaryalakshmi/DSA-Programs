let words = ['bag', 'gab', 'foo', 'abg', 'oof', 'bum', 'cat', 'dog', 'tac', 'god', 'act', 'cars', 
    'repaid', 'dues', 'nose', 'signed', 'lane', 'paired', 'arcs', 'grab', 'used', 'ones', 'brag', 'sued', 'lean', 'scar', 'design']

function Anagrams(words) {
	const anagramList = {}
	const collectedAnagrams = []
	for(let word of words) {
		let sortedWord = word.split("").sort().join("")
		if(anagramList[sortedWord]) {
			anagramList[sortedWord].push(word)
		} else {
			anagramList[sortedWord] = [word]
		}
	}
	for(let key in anagramList) {
		collectedAnagrams.push(anagramList[key])
	}
	return collectedAnagrams
}

console.log(Anagrams(words))