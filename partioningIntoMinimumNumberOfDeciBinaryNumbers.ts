function numberOfMatches(n: number, count:number = 0): number{
    count += n % 2 === 0 ? n / 2 : ( n - 1 ) / 2;
    if (n < 2) {
        return count
    }else {
        n % 2 === 0 ? n = n / 2 : n = ((n-1) / 2 + 1)
        return numberOfMatches(n, count)
    }
    // return n - 1
};

numberOfMatches(7)