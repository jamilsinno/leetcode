function reverseWords(s: string): string {
    // split the string to work with arrays
    let arr = s.split(' ');

    // iterate over the array, reassigning each index with its reverse variant
    for ( let i = 0; i < arr.length; i++ ) {
        arr[i] = arr[i].split('').reverse().join('');
    }

    // join the array back into a string and return
    return arr.join(' ')
};