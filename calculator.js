const prompt = require('prompt-sync')();
const calculator = (num1, op, num2) =>{
    // Check if the operands are numbers
    if (isNaN(num1) || isNaN(num2)) return 'Invalid Operands!';

    // Apply the operator specified by op to the operands
    if (op == '+') return (num1 + num2).toFixed(2);          // Sum of two numbers
    else if (op == '-') return (num1 - num2).toFixed(2);     // Difference of two numbers
    else if (op == '*') return (num1 * num2).toFixed(2);     // Product of two numbers
    else if (op == '/') return (num1 / num2).toFixed(2);     // Divisor of two numbers

    // Check if the operator is anything other than : +,-,*,/
    else return 'Invalid operator!'
}

let inputExpression = prompt('Enter expression, separated by spaces (e.g 13 + 50):');

// Convert the string expression to an array and typecast the operands to float.
let [num1, op, num2] = inputExpression.split(' ').map(element => isNaN(element) ? element : parseFloat(element));

console.log(calculator(num1, op, num2));