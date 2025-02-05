function differenceOfSum(nums: number[]): number {
  let sumDigit: number = 0;
  let sumElem: number = 0;
  let thousands: number = 0;
  let hundreds: number = 0;
  let tens: number = 0;
  let unit: number = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 10) {
      thousands = Math.floor(nums[i] / 1000);
      hundreds = Math.floor((nums[i] % 1000) / 100);
      tens = Math.floor((nums[i] % 100) / 10);
      unit = nums[i] % 10;
      sumDigit += thousands + hundreds + tens + unit;
    } else {
      sumDigit += nums[i];
    }
    sumElem += Number(nums[i]);
  }
  return sumElem - sumDigit;
}
