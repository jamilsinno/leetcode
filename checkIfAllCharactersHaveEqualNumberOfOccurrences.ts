function areOccurrencesEqual(s: string): boolean {
    let hash = new Map();

    for (let i of s) {
        if (!hash.has(i)) {
            hash.set(i, hash[i] = 0)
        }
        hash.set(i, hash[i]++)
    }

    let temp = null;

    for (const [key, value] of hash) {
        temp === null ? temp = value : temp
        if (temp !== value) {
            return false
        }
    }

    return true
};