const capitalize = (input) => {
    input = input.split('')
    input[0] = input[0].toUpperCase()
    return input.join('')
}

module.exports = capitalize