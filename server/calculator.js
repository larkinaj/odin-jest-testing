const calculatorObj = {
    add: (a,b) => a + b,
    subtract: (a,b) => a - b,
    divide: (a,b) => a / b,
    multiply: (a,b) => a * b,
}

class Calculator {
    add(a, b) {
        return a + b;
    } 
    subtract(a, b) {
        return a - b;
    } 
    divide(a, b) {
        return a / b;
    } 
    multiply(a, b) {
        return a * b;
    } 
}

module.exports =  {
    calculatorObj,
    Calculator
}
