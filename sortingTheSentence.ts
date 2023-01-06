function sortSentence(s: string): string {
    let arr:Array<string> = s.split(' ')
    let ans:Array<string> = []

    for (let i: number = 0; i < arr.length; i++) {
        let index: string = arr[i].slice(arr[i].length - 1)
        ans[index] = arr[i].slice(0, arr[i].length - 1)
    }
    return ans.join(' ').trim()
};