const { calculatorObj } = require('../server/calculator.js')
const { Calculator } = require('../server/calculator.js')
const calculator = new Calculator()

console.log('require statement', require('../server/calculator.js'))

describe('calculator test', () => {
    test('calculator is an object', () => {
        expect(typeof calculator).toEqual('object');
    })
    it('calculator add method adds two numbers', () => {
        expect(calculator.add(2,3)).toEqual(5);
    })
    it('calculator subtract method subtracts two numbers', () => {
        expect(calculator.subtract(7,3)).toEqual(4);
    })
    it('calculator divide method multiplies two numbers', () => {
        expect(calculator.divide(10,2)).toEqual(5);
    })
    it('calculator multiply method divides two numbers', () => {
        expect(calculator.multiply(4,5)).toEqual(20);
    })
})