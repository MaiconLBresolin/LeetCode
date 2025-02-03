function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    let filtro = target - nums[i];
    let den = nums.find((element, index) => element === filtro && index !== i);

    if (den !== undefined) {
      return [i, nums.indexOf(den, i + 1)];
    }
  }
  return [];
}
