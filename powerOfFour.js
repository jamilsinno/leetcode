// With one parameter being passed. The test is to determine if parameter n is equal to 4**n at any point. N can be a very large number. 2**31. 

// If the parameter is equal to 4**x return true. Otherwise return false.

var isPowerOfFour = function(n) {
    // iterate over 4**x and compare it to n
    if (n === 1){
        return true
    } else if (n < 1) {
        return false
    }
    return isPowerOfFour(n/4)
};

console.log(isPowerOfFour(16), true)
console.log(isPowerOfFour(5), false)
console.log(isPowerOfFour(1), true)
console.log(isPowerOfFour(-1), false)
console.log(isPowerOfFour(0), false)