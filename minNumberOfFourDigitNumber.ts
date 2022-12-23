function minimumSum(num: number): number {
    let newNum: string[] = String(num).split('').sort()
    let num1: string[] = []
    let num2: string[] = []

    for (let i= 0; i < newNum.length; i++ ) {
        if (i % 2 !== 0 ) {
            num2.push(newNum[i])
        } else {
            num1.push(newNum[i])
        }   
    }
    let ans = Number(num1.join('')) + Number(num2.join(''))
    return ans
};