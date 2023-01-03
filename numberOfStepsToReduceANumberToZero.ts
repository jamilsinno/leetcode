function numberOfSteps(num: number): number {
    let steps:number = 0;
    let total:number = num;

    if (num === 0) {
        return 0
    }

    // for (let i = 0; i < total; i++) {
    //     if (num <= 0 ) {
    //         break
    //     }
    //     if ( num % 2 !== 0) {
    //         num = num - 1
    //         steps += 1
    //     } else {
    //         num = num / 2
    //         steps += 1
    //     }
    // }

    do {
        if ( total % 2 !== 0) {
            total = total - 1
            steps += 1
        } else {
            total = total / 2
            steps += 1
        }
    } while (total > 0)
    return steps
};