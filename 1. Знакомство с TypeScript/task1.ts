function plus (a?: number, b?: number) : number | undefined {
    if(!a || !b) return undefined
    return a + b;
}
console.log(plus(3,2));

function minus (a?: number, b?: number) : number | undefined {
    if(!a || !b) return undefined
    return a - b;
}
console.log(minus(3,2));

function multiply (a?: number, b?: number) : number | undefined {
    if(!a || !b) return undefined
    return a * b;
}
console.log(multiply(3,2));

function division (a?: number, b?: number) : number | undefined {
    if(!a || !b) return undefined
    return a / b;
}
console.log(division(3,2));