function plusOne(digits: number[]): number[] {
  let sum = (BigInt(digits.join("")) + BigInt(1)).toString();
  const arr = sum.split("").map(Number);
  return arr;
}
