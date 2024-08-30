function balanceParantheses (str) {
    const stack = []
    const matchingParantheses = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    }
    for(const char of str) {
        if(char in matchingParantheses) {
            stack.push(char)
        } else if(Object.values(matchingParantheses).includes(char)) {
            if(stack.length === 0) {
                return false
            }
            const lastOpen = stack.pop()
            if(matchingParantheses[lastOpen] !== char ) {
                return false
            }
        }
    }
    return stack.length === 0
}

const str1 = "{[()]}";
const str2 = "{[(])}";
const str3 = "{{[[(())]]}}";
console.log(areParenthesesBalanced(str1));
// console.log(areParenthesesBalanced(str2));
// console.log(areParenthesesBalanced(str3));