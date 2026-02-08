function solution(n) {
  let sum = 0;

  if (n % 2 === 1) {
    // n이 홀수 => 홀수의 합
    for (let i = 1; i <= n; i++) {
      if (i % 2 === 1) {
        sum += i;
      }
    }
  } else {
    // n이 짝수 => 짝수의 제곱 합
    for (let i = 1; i <= n; i++) {
      if (i % 2 === 0) {
        sum += i * i;
      }
    }
  }

  return sum;
}