function solution(str1, str2) {
    // if(str1 === "aaaaa") {
    //     console.log("aaaaa")
    // } else if (str2 === "bbbbb") {
    //     console.log("bbbbb")
    // } else {
    //     console.log("ababababab")
    // }
    
    let result = "";
    for (let i = 0; i < str1.length; i++) {
        result += str1[i] + str2[i];
    }
    return result
}