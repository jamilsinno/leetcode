function sumBase(n: number, k: number): number {
    return n.toString(k).split('').reduce( (a,b) => a + +b, 0 )
};