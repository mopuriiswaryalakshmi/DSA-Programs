function validateAndAcceptNumbers(input) {
    console.log(typeof(input))
    console.log(!Number.isInteger(input)) // Float
    console.log(Number(input) < 0 && !Number.isInteger(input)) // Negative Float
    console.log(Number(input) === input)  // string with float
    console.log(Number(input) < 0)  // negative number
} 

//validateAndAcceptNumbers(3.14)
validateAndAcceptNumbers(3.14) // negative float
//validateAndAcceptNumbers('3.14')
//validateAndAcceptNumbers(-10)

