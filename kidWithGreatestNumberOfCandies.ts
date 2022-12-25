function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    let max: number = Math.max(...candies)
    let newC: number[] = candies.map( c => c + extraCandies)
    let ans: boolean[] = []

    for (let i = 0; i < newC.length; i++) {
        if (newC[i] < max){
            ans.push(false)
        } else {
            ans.push(true)
        }
    }
    return ans
};