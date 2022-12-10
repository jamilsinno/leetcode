var isPalindrome = function(x) {
    let rev = Number(x.toString().split('').reverse().join(''))
    return x === rev
};

console.log(isPalindrome(121), true)