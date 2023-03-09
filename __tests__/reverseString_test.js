const reverseString = require('../server/reverseString.js')

describe('reverseString test', () => {
    it('reverseString returns input with charcters reversed', () => {
        expect(reverseString('test')).toEqual('tset');
    })
    test('reverseString is a function', () => {
        expect(typeof reverseString).toEqual('function');
    })
})