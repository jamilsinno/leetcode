function decode(encoded: number[], first: number): number[] {
    let ans = [first];

    for (let i: number = 0; i < encoded.length; i++) {
        ans.push(ans[i] ^ encoded[i])
    }
    
    return ans;
};