var findContentChildren = function(g, s) {
  // create a counter
  let count = 0
    g.sort( (a,b) => a-b )
    s.sort( (a,b) => a-b )
  // iterate over array and compare the greed values and the cookie sizes to determine how many kids you can make content
    for (let j=0; j < s.length; j++) {
      if(g[count] <= s[j]){
        count++
      }
    }
  // return the number
  return count
};