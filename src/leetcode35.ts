function searchInsert(nums: number[], target: number): number {
  let pos = nums.indexOf(target);
  if (pos < 0) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] >= target) {
        return i;
      }
    }
    return nums.length;
  }
  return pos;
}
