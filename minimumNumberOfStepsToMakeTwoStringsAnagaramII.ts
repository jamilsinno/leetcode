function minSteps(s: string, t: string): number {
    let count: number = 0;
    let mapS: {} = new Map();

    for (let c of s) {
        mapS[c] = (mapS[c] || 0) + 1
    }

    for (let c of t) {
        if (!mapS[c]) { continue }
        mapS[c]-- 
        count++
    }
    return s.length + t.length - 2 * count
};