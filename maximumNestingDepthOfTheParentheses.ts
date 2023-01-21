function maxDepth(s: string): number {
    let depth: number = 0;
    let max: number = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '('){
            depth += 1;
            max = Math.max(depth, max)
        } else if (s[i] === ')') {
            depth -= 1;
        }
    }
    return max
};