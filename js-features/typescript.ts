function map<T, R>(arr: T[], callback: (v: T, i: number, arr: T[]) => R): R[] {
    return arr.map(callback)
}

// map([], v=>v*2)

interface Figure {
    size: number,
    color: string,

    area(),
}


