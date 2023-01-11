function findCenter(edges: number[][]): number {
    for (let j: number = 0; j < edges.length; j++) {
        if (!edges[j].includes(edges[0][0])){
            return edges[0][1]
        }
    }
    return edges[0][0]
};