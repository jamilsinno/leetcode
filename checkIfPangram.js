var checkIfPangram = function(sentence) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz'
  for (let i = 0; i < alpha.length; i++) {
    if (!sentence.includes(alpha[i])) {
      return false
    }
  }
  return true 
};