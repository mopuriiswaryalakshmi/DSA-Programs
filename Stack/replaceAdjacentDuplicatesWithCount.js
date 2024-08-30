function countAdjacentDuplicates(){
    let result = []
    let i = 0

    while(i < input.length){
        let count = 0
        while(i+1 < input.length && input[i] === input[i+1]){
            count++
            i++
        }
        result.push(input[i])
        if(count){
            result.push(count)
        }
        i++
    }
    return result.join('')
}

// let input = 'abbaca'
let input = 'aaabbcddbaa'
let result = countAdjacentDuplicates(input)

console.log(result)