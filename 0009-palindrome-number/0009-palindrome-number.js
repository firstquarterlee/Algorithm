/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
  const str = x.toString(); // 숫자를 문자열로 변환
  const reversed = str.split('').reverse().join(''); // 문자열 뒤집기
  return str === reversed; // 원래 문자열과 비교
}