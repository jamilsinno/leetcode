function findNumbers(nums: number[]): number {
    let count: number = 0;
    let arr = nums.map(x => x.toString())

    for (let i = 0; i < arr.length; i++){
        arr[i].length % 2 === 0 ? count++ : count;
    }

    return count;
};