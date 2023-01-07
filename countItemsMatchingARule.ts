function countMatches(items: string[][], ruleKey: string, ruleValue: string): number {
    let count: number = 0;
    let j: number; 
    switch (ruleKey) {
        case 'type':
            j = 0;
            break;
        case 'color':
            j = 1;
            break;
        case 'name':
            j = 2;
            break;
    }
    for (let i:number = 0; i < items.length; i++) {
        if ( items[i][j].includes(ruleValue) && items[i][j].length === ruleValue.length ) {
            count += 1
        }
    }
    return count
};