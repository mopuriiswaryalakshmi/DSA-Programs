// Character array as lines of words. Reverse the line word by word without exta space.
function reverseWord(text) {
	console.log(text)
	reversString = ""
	function reverseWordsInLine(line){
			let arr = line.split('')
			let start = 0

			reverse(arr, 0, arr.length-1)

			for(let i=0; i <= arr.length; i++) {
				if(i === arr.length || arr[i] === " "){
					console.log(i)
					reverse(arr, start, i-1)
					start = i+1
				}
			}

			return arr.join('')
	}

	function reverse(arr, start, end ) {
		while(start < end) {
			// temp = arr[start]
			// arr[start] = arr[end]
			// arr[end] = temp
			[arr[start], arr[end]] = [arr[end], arr[start]]
			// start++
			end--
		}
	}

	result = reverseWordsInLine(text)
	return result
}

s = "the sky is blue"
console.log(reverseWord(s))

// Example usage
// const multiLineText = `hello world example text JavaScript is fun`;
/* 
function reverseWordsInLines(text) {
    // Helper function to reverse words in a single line
    function reverseWordsInLine(line) {
        let arr = line.split(''); // Convert line to array for in-place manipulation
        let start = 0;

        // Reverse the entire line
        reverse(arr, 0, arr.length - 1);

        // Reverse each word in the reversed line
        for (let i = 0; i <= arr.length; i++) {
            if (i === arr.length || arr[i] === ' ') {
                reverse(arr, start, i - 1);
                start = i + 1;
            }
        }

        return arr.join(''); // Convert array back to string
    }

    // Helper function to reverse a section of an array
    function reverse(arr, start, end) {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]]; // Swap elements
            start++;
            end--;
        }
    }

    // Split the text into lines
    let lines = text.split('\n');

    // Process each line to reverse words
    lines = lines.map(line => reverseWordsInLine(line));

    // Join the processed lines back into a single string with newline characters
    return lines.join('\n');
}



const reversedText = reverseWordsInLines(multiLineText);
console.log(reversedText);
*/