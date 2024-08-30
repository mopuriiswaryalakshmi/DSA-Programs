function removeAdjacentDuplicates(input) {
    let stack = []

    for(let char of input) {
        if(stack.length > 0 && stack[stack.length-1] === char) {
            stack.pop()
        } else {
            stack.push(char)
        }
    }
    return stack.join('')
}

let input = 'abbaca'
let result = removeAdjacentDuplicates(input)
console.log(result)
