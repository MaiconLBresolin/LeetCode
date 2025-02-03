function countDigits(num: number): number {
  const digits = num.toString();
  let count = 0;

  for (const digit of digits) {
    const digitNum = Number(digit);
    if (digitNum !== 0 && num % digitNum === 0) {
      count++;
    }
  }

  return count;
}
