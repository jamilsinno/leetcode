function sumOddLengthSubarrays(arr: number[]): number {
    let ans: number = 0;

    for (let i: number = 0; i < arr.length; i++) {
        let temp: number[] = [];
        for (let j: number = i; j < arr.length; j++) {
            temp.push(arr[j])
            if (temp.length % 2 !== 0) {
                ans += temp.reduce( (pv, cv) => pv + cv, 0 )
            }
        }
    }

    return ans
};