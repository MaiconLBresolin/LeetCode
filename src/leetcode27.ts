function removeElement(nums: number[], val: number): number {
  const filter = nums.filter((num) => num != val);
  nums.length = 0;
  nums.push(...filter);
  return nums.length;
}

console.log(removeElement([1, 2, 3, 4, 2, 5], 2));
