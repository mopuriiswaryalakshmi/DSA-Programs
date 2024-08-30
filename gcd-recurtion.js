function gcdRecursion(inputA, inputB) {
    if(inputB === 0) {
        return inputA
    }
    return gcdRecursion(inputB, inputB % inputA)
}
console.log(gcdRecursion(12, 15))