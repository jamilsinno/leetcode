function numJewelsInStones(jewels: string, stones: string): number {
    let jewelsArr = jewels.split('');
    let count: number = 0;

    for (let i = 0; i < stones.length; i++){
        if (jewelsArr.includes(stones[i])){
            count ++
        };
    };

    return count
};