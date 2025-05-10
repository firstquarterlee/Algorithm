/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  const stack = [];
  const pair = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (let char of s) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char); // 여는 괄호는 스택에 넣는다
    } else {
      // 닫는 괄호일 경우
      if (stack.pop() !== pair[char]) {
        return false; // 짝이 안 맞으면 false
      }
    }
  }

  return stack.length === 0; // 다 맞았으면 스택이 비어야 한다
}