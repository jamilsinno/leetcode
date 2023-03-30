function mergeSimilarItems(items1: number[][], items2: number[][]): number[][] {
    let hash = new Map();
    let ans = [];

    for (let i in items1) {
        if (!hash.has(items1[i][0])) {
            hash.set(items1[i][0], items1[i][1])
        }
    }

    for ( let i in items2) {
        if (!hash.has(items2[i][0])) {
            hash.set(items2[i][0], items2[i][0] = items2[i][1])
        } else {
            hash.set(items2[i][0], hash.get(items2[i][0]) + items2[i][1])
        }
    }

    for (const [key, value] of hash){
        ans.push([key, value])
    }

    return ans.sort((a,b) => a[0] - b[0])
};