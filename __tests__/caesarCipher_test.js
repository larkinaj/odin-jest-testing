const caeserCipher = require('../server/caesarCipher.js')

describe('Caesar Cipher With Shift of 1', () => {
    it('Caesar Cipher creates basic cipher text', () => {
        expect(caeserCipher('abcd', 1)).toEqual('bcde')
    })
    it('Caesar Cipher does not modify special characters or numbers', () => {
        expect(caeserCipher('Don\'t modify the extra stuff...!!!123', 1)).toEqual('epo\'u npejgz uif fyusb tuvgg...!!!123')
    })
    it('Caesar Cipher works with the letter "z"', () => {
        expect(caeserCipher('I\'m sleepy ZZzzz', 1)).toEqual('j\'n tmffqz aaaaa')
    })
})

describe('Caesar Cipher With Shift of 5', () => {
    it('Caesar Cipher creates basic cipher text', () => {
        expect(caeserCipher('abcd', 5)).toEqual('fghi')
    })
    it('Caesar Cipher does not modify special characters or numbers', () => {
        expect(caeserCipher('Don\'t modify the extra stuff...!!!123', 5)).toEqual('its\'y rtinkd ymj jcywf xyzkk...!!!123')
    })
    it('Caesar Cipher works with the letter "z"', () => {
        expect(caeserCipher('I\'m sleepy ZZzzz', 5)).toEqual('n\'r xqjjud eeeee')
    })
})

describe('Caesar Cipher Edge Cases', () => {
    it('Should return error if shift is over 25 or under 0', () => {
        expect(caeserCipher('abcd', 26)).toBeInstanceOf(Error)
        expect(caeserCipher('abcd', -1)).toBeInstanceOf(Error)
    })
    it('Should return error if input is not a string or shift is not a number', () => {
        expect(caeserCipher(123, 5)).toBeInstanceOf(Error)
        expect(caeserCipher('abcd', '5')).toBeInstanceOf(Error)
    })
})