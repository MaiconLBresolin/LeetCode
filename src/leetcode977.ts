function sortedSquares(nums: number[]): number[] {
  let squared: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    squared.push(Math.pow(nums[i], 2));
  }
  return squared.sort((a, b) => a - b);
}
