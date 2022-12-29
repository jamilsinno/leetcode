function interpret(command: string): string {
    let com = command.split('')
    let ans = '';

    for (let i = 0; i < com.length; i++) {
        if (com [i] === '(' && com[i+1] === ')' ) {
            ans += 'o'
            i++
        } else if (com[i] === '(' && com[i + 1] !== ')' || com[i] === ')') {
            com.splice(i, 0)
        } else {
            ans += com[i]
        }
    }
    return ans
};