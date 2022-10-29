var makeFancyString = function(s) {
    // iterate over string and compare the current element to the next two elements
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== s[i + 2] || s[i] !== s[i + 1]) {
        ans += s[i]
      }
    }
    return ans
    // return  s.split('').filter( (el, i) => el !== s[i+1] || el !== s[i+2]).join('')
  };