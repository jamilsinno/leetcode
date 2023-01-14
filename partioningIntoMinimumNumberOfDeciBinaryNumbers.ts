function numberOfMatches(n: number): number {
    // let matches: number = n % 2 === 0 ? n / 2 : ( n - 1 ) / 2;

    // let count: number += matches;
    // console.log(count)
    // if (n === 2 || matches === 1) {
    //     return count
    // } else {
    //     n % 2 === 0 ? n = n / 2 : n = ((n-1) / 2) + 1
    // }

    // numberOfMatches(n)

    // let matches: number;
    // n % 2 === 0 ? matches = n / 2 : matches = (n - 1) / 2

    // let count: number = matches;
    
    // if (matches === 1 && n % 2 !== 0) {
    //     return count = 2
    // } else if (matches === 1 && n === 2) {
    //     return count = 1
    // }

    // console.log(n, matches, count)
    // do {
    //     if (n <= 2) break
    //     if (n % 2 === 0) {
    //         matches = n / 2
    //         n = n / 2
    //     } else {
    //         matches = (n - 1) / 2
    //         n = (n - 1) / 2 + 1
    //     }
    //     count += matches
    //     console.log(n, matches, count)
    // } while (n > 2) 

    // return count
    return n - 1
};