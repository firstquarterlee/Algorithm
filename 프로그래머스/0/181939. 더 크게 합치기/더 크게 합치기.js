function solution(a, b) {
    let ab = String(a) + String(b)
    let ba = String(b) + String(a)
    
    if (ab > ba) {
        return Number(ab)
    } else if (ab < ba) {
        return Number(ba)
    } else
        return Number(ab)
}