function divide(dividend: number, divisor: number): number {
  let result = Math.trunc(dividend / divisor);
  return Math.max(Math.min(result, 2147483647), -2147483648);
}
