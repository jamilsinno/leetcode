// Passed an alpha-numeric string. Just lowercase letters. No special characters or arrays. There can be repeated largest/second largest numebrs.

// The second largest digit in the string. Or -1 if no numbers are in the string or a second largest digit does not exist.


var secondHighest = function(s) {
    let max = [...new Set(s)]
    let maxNum = max.filter(el => !isNaN(+el)).map(el => +el).sort( (a,b) => b-a)
    console.log(maxNum)
    if (maxNum.length === 0 || maxNum.length < 2 && maxNum[0] !== maxNum[1]){
        return -1
    } else {
        return maxNum[1]
    }
};

// console.log(secondHighest('a1b2c3d4'), 3)
// console.log(secondHighest('akkkk54'), 4)
// console.log(secondHighest('aaaaa'), -1)
console.log(secondHighest('aa11a'), -1)
console.log(secondHighest('2211a'), 1)