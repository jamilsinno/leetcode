function isSameAfterReversals(num: number): boolean {
    const reversed: number = parseInt(num.toString().split('').reverse().join(''))
    const reversed2: number = parseInt(reversed.toString().split('').reverse().join(''))

    // console.log(reversed, reversed2)

    return reversed2 === num
};