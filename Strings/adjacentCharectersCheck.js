/* 
Output: a3b2a2d2c2
*/

const input = "aaabbaadcc" 

function adjacentCharecter(input) {
    let i = 0
    output = ''
    while(i < input.length) {
        currentCharecter = input[i]
        count = 1
        nextIndex = i+1
        while( nextIndex <= input.length && currentCharecter == input[nextIndex]) {
            count++
            nextIndex++
        }
        output += currentCharecter
        if(count > 1) {
            output += count
        }
        i = nextIndex
    }
    console.log(output)
    return output
}

adjacentCharecter(input)