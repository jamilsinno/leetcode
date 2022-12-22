function mostWordsFound(sentences: string[]): number {
    let max: number = 0;
    let len: number = 0;
    for ( let i = 0; i < sentences.length; i++ ) {
        if (sentences[i].split(' ').length > max) {
            len = sentences[i].split(' ').length;
            max = len;
        };
    };
    return len;
};

console.log(mostWordsFound(["w jrpihe zsyqn l dxchifbxlasaehj","nmmfrwyl jscqyxk a xfibiooix xolyqfdspkliyejsnksfewbjom","xnleojowaxwpyogyrayfgyuzhgtdzrsyococuqexggigtberizdzlyrdsfvryiynhg","krpwiazoulcixkkeyogizvicdkbrsiiuhizhkxdpssynfzuigvcbovm","rgmz rgztiup wqnvbucfqcyjivvoeedyxvjsmtqwpqpxmzdupfyfeewxegrlbjtsjkusyektigr","o lgsbechr lqcgfiat pkqdutzrq iveyv iqzgvyddyoqqmqerbmkxlbtmdtkinlk","hrvh efqvjilibdqxjlpmanmogiossjyxepotezo","qstd zui nbbohtuk","qsdrerdzjvhxjqchvuewevyzlkyydpeeblpc"])) // 6