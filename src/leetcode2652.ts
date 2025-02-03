function sumOfMultiples(n: number): number {
  let arr: number[] = Array(n)
    .fill(0)
    .map((_, i) => i + 1);
  let finalArr: any[] = [];
  finalArr.push(
    ...arr.filter(
      (element) => element % 3 == 0 || element % 5 == 0 || element % 7 == 0
    )
  );
  const sum = finalArr.reduce((acc, curr) => acc + curr, 0);
  return sum;
}
