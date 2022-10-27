var rotateString = function(s, goal) {
    let newS = s
    for (let i = 0; i < s.length; i++) {
      if (newS === goal) {
        return true
      } else {
        newS = newS.slice(1) + newS[0]
      }
    }
    return false
  };