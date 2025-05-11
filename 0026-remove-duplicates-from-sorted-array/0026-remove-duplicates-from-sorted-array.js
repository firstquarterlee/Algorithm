/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  if (nums.length === 0) return 0;

  let k = 1; // 첫 번째 숫자는 무조건 유일하니까

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i]; // 새로운 위치에 유일한 숫자를 넣어줘
      k++;
    }
  }

  return k; // 유일한 숫자의 개수
}