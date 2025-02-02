function addDigits(num: number): number {
  let sum = num
    .toString()
    .split("")
    .map(Number)
    .reduce((acc, curr) => acc + curr, 0);

  if (sum >= 10) {
    return addDigits(sum);
  } else {
    return sum;
  }
}

addDigits(38);
