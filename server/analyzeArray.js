const analyzeArray = (input) => {
    const arrayData = {
        max: -Infinity,
        min: Infinity,
        length: input.length,
        average: 0,
    }
    let total = 0;
    for (let i = 0; i < input.length; i++) {
        if (typeof input[i] !== 'number') return Error('Array elements must be numbers')
        total += input[i]
        if (input[i] < arrayData.min) arrayData.min = input[i]
        if (input[i] > arrayData.max) arrayData.max = input[i]
    }
    arrayData.average = total / arrayData.length
    console.log(arrayData)
    return arrayData
}

module.exports = analyzeArray;