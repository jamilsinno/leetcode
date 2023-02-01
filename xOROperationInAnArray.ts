// We are passed two numbers. The first number indicates the end point and the second number is our starting point. To find the numbers between the start and the end, you should complete the array using the equation they gave us nums[i] = start + 2 * i

// We should return a single number that is the result of a XOR operation on every element in the array.

function xorOperation(n: number, start: number): number {
    // create an array to hold your numbers
    let arr: number[] = [];
    let count: number = 0;

    // Figure out what each index's value is and push it into the array
    for ( let i:number = 0; i < n; i++ ) {
        arr[i] = start + 2 * i
    }

    console.log(0^2)
    console.log(2^4)
    console.log(6^6)
    console.log(0^8)
    // use the reduce method to figure out the XOR value of the array
    return arr.reduce( (pv, cv) => pv ^ cv, count )
};
