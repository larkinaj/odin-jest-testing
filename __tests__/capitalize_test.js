const capitalize = require('../server/capitalize.js')

describe('This is a test', () => {
    it('Capitalize returns input with first character capitalized', () => {
        expect(capitalize('test')).toEqual('Test');
    })
    test('Capitalize is a function', () => {
        expect(typeof capitalize).toEqual('function');
    })
})