function destCity(paths: string[][]): string {
    let depart = new Set()


    paths.forEach( p => depart.add(p[0]))

    for (let dest of paths) {
        if (!depart.has(dest[1])) return dest[1]
    }

    return
};