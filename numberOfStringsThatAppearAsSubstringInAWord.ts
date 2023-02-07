function numOfStrings(patterns: string[], word: string): number {
    let counter: number = 0;

    for ( let i: number = 0; i < patterns.length; i++ ) {
        if ( word.includes(patterns[i]) ) {
            counter += 1;
        }
    }

    return counter
};