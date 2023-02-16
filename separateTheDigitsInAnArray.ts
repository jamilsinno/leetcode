function separateDigits(nums: number[]): number[] {
    return nums.map( x => String(x) ).join('').split('').map( x => +x )
 };