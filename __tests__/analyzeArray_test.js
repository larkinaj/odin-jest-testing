const analyzeArray = require('../server/analyzeArray.js')

describe('analyzeArray With Positive Elements', () => {
    it('analyzeArray correctly calulates array with positive elements', () => {
        expect(analyzeArray([1,8,3,4,2,6])).toEqual({
            average: 4,
            min: 1,
            max: 8,
            length: 6
        })
    })
})

describe('analyzeArray With Mix Of Positive And Negative Elements', () => {
    it('analyzeArray correctly calulates array with positive And negative elements', () => {
        expect(analyzeArray([1,-6,6,8,-7])).toEqual({
            average: 0.4,
            min: -7,
            max: 8,
            length: 5
        })
    })
})

describe('analyzeArray With Non-Number Elements', () => {
    it('analyzeArray returns error if any elements are non-numbers', () => {
        expect(analyzeArray([1,'4',6,'8',3])).toBeInstanceOf(Error)
    })
})