const caeserCipher = (input, shift) => {
    if (typeof input !== 'string') return Error('The first parameter should be a string')
    if (shift > 25 || shift < 0 || typeof shift !== 'number') return Error('The second parameter should be a number between 0 - 25')
    if (shift === undefined) shift = 1;
    const cipherText = input.split('').map((el)=>{
        el = el.toLowerCase()
        const asciiVal = el.charCodeAt(0)
        if(!/[a-zA-Z]/.test(el)) return el
        let cipherascii = asciiVal + shift
        if (cipherascii > 122) cipherascii -= 26
        return String.fromCharCode(cipherascii)
    })
    return cipherText.join('')
}

module.exports = caeserCipher;