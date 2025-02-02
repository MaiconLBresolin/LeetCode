function numberGame(nums: number[]): number[] {
  let arr = nums.sort((a, b) => b - a);
  let finalArr: number[] = [];
  while (arr.length > 0) {
    let alice = arr.pop();
    let bob = arr.pop();

    if (bob !== undefined) finalArr.push(bob);
    if (alice !== undefined) finalArr.push(alice);
  }
  return finalArr;
}

numberGame([3, 4, 1, 2, 6, 5]);
