function signFunc(x: number): number {
  if (x > 0) {
    return 1;
  } else if (x == 0) {
    return 0;
  } else {
    return -1;
  }
}

function arraySign(nums: number[]): number {
  let sign = 1;

  for (let num of nums) {
    if (num === 0) return signFunc(0);
    if (num < 0) sign *= -1;
  }
  return signFunc(sign);
}
