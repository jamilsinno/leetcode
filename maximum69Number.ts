// We are being passed a number. It is type number. The number won't contain any characters that aren't exclusively numbers. We won't have to take into account nested arrays or objects.

// We just need to return the new number after it has been manipulated

function maximum69Number (num: number): number {
    // take the number and make it type string[]
    let newNum: string[] = num.toString().split('')

    // loop over the array, and change the first 6 into a 9
    for (let i = 0; i < newNum.length; i++) {
        if (newNum[i] === '6') {
            newNum[i] = '9'
            break
        }
    }

    return +(newNum.join(''))
};