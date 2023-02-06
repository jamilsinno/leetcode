function flipAndInvertImage(image: number[][]): number[][] {
    let ans: number[][] = []
    for ( let i: number = 0; i < image.length; i++ ) {
          let temp: number[] = []
          for ( let j: number = 0; j < image[i].length; j++ ) {
            //   if (image[i][j] === 1) {
            //       temp.unshift(0)
            //   } else {
            //       temp.unshift(1)
            //   }
            temp.unshift(image[i][j] ^ 1)
          }
          ans.push(temp)
    }
    return ans
};