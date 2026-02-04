function solution(a, b) {
    let a1 = a
    let a2 = b
    let plus = a1+String(a2)
    let plus2 = 2 * a * b
    
    if (plus < plus2) {
        return Number(plus2)
    } else {
        return Number(plus)
    }
}