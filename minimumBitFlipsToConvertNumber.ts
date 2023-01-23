function minBitFlips(start: number, goal: number): number {
    // let ans: string = (start ^ goal).toString(2);
    // let count: number = 0;
    // console.log(start.toString(2), goal.toString(2), ans);
    // // iterate over the comparison and add to your step counter (count) to determine the total number of steps required to change the start number over to the goal number
    // for (let i: number = 0; i < ans.length; i++ ) {
    //     if (ans[i] === '1') {
    //         count += 1
    //     }
    // }

    // return count
    return (start ^ goal).toString(2).split('0').join('').length
};