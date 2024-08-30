function getGCDOfNumbers(inputA, inputB) {
    let num1 = inputA, num2 = inputB
    while(num1 != 0) {
        temp = num2 % num1
        num2 = num1
        num1 = temp
    }
    console.log(num2)
    return num2
}

getGCDOfNumbers(15, 12)

// O(log(min(a,b)))
