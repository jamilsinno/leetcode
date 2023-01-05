function decodeMessage(key: string, message: string): string {
    let newKey:Array<string> = Array.from(new Set(key.split(' ').join('')));
    let map:Map<string, string> = new Map()
    let ans:string = ''

    for (let i = 0; i < newKey.length; i++){
        map.set(newKey[i], String.fromCharCode(97 + i) )
    }

    for (let i = 0; i < message.length; i++) {
        if (message[i] !== ' ') {
            ans += map.get(message[i])
        } else {
            ans += ' '
        }
    }
    return ans
};