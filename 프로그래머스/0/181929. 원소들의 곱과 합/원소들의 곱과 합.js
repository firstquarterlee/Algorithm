function solution(num_list) {
    let multiply = 1;
    let sum = 0;
    
    for(let i = 0; i < num_list.length; i++) {
        multiply *= num_list[i];
        sum += num_list[i];
    }
    
    if(multiply < sum * sum) {
        return 1;
    } else {
        return 0;
    }
    
}

// 모든 원소의 곱
// 모든 원소의 합의 제곱
// 그럼 곱, 합 필요함

// 곱 저장 변수 필요
// 합 저장 변수 필요
// 반복문 돌면서:
// 곱 *= 현재값
// 합 += 현재값
// 마지막에:
// 합 * 합
// 비교