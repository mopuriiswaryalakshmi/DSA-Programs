// Tokenize the expression
function tokenize(expression) {
    let tokens = [];
    let current = '';

    for (let char of expression) {
        if (/\s/.test(char)) {
            continue; // Skip whitespace
        }
        
        if (/\d/.test(char)) {
            current += char; // Build multi-digit numbers
        } else {
            if (current) {
                tokens.push(current);
                current = '';
            }
            if (['+', '-', '*', '/', '(', ')', '^'].includes(char)) {
                tokens.push(char);
            }
        }
    }
    
    if (current) {
        tokens.push(current); // Push the last number if any
    }
    
    return tokens;
}

// Convert infix to postfix using the Shunting Yard algorithm
function infixToPostfix(tokens) {
    let precedence = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2,
        '^': 3
    };
    let output = [];
    let operators = [];
    
    for (let token of tokens) {
        if (!isNaN(token)) {
            output.push(token);
        } else if (token === '(') {
            operators.push(token);
        } else if (token === ')') {
            while (operators.length && operators[operators.length - 1] !== '(') {
                output.push(operators.pop());
            }
            operators.pop(); // Remove '(' from stack
        } else if (precedence[token]) {
            while (operators.length && precedence[token] <= precedence[operators[operators.length - 1]]) {
                output.push(operators.pop());
            }
            operators.push(token);
        }
    }

    while (operators.length) {
        output.push(operators.pop());
    }

    return output;
}

// Evaluate postfix expression
function evaluatePostfix(tokens) {
    let stack = [];
    
    for (let token of tokens) {
        if (!isNaN(token)) {
            stack.push(Number(token));
        } else {
            let b = stack.pop();
            let a = stack.pop();
            switch (token) {
                case '+':
                    stack.push(a + b);
                    break;
                case '-':
                    stack.push(a - b);
                    break;
                case '*':
                    stack.push(a * b);
                    break;
                case '/':
                    stack.push(a / b);
                    break;
                case '^':
                    stack.push(Math.pow(a, b));
                    break;
            }
        }
    }

    return stack.pop();
}

// Main function to convert infix to postfix and then evaluate
function processExpression(expression) {
    let tokens = tokenize(expression);
    console.log("tokens=====")
    console.log(tokens)
    let postfixTokens = infixToPostfix(tokens);
    console.log("postfixTokens=====")
    console.log(postfixTokens)
    let result = evaluatePostfix(postfixTokens);
    
    return {
        infix: expression,
        postfix: postfixTokens.join(' '),
        result: result
    };
}

// Example usage
// let expression = "3 + 4 * ( 2 - 1 ) ^ 2 ^ 3";
let expression = "2+(5*3)";  
let result = processExpression(expression);
console.log("Infix Expression: " + result.infix);    // "2+(5*3)"; 
console.log("Postfix Expression: " + result.postfix); // 2 5 3 * +
console.log("Evaluation Result: " + result.result);   // 17
