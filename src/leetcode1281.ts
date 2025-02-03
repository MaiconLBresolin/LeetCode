function subtractProductAndSum(n: number): number {
  const arr = n.toString().split("");
  let indexSum: number = 0;
  let indexProduct: number = 1;
  for (let i = 0; i < arr.length; i++) {
    indexSum += Number(arr[i]);
    indexProduct *= Number(arr[i]);
  }
  return indexProduct - indexSum;
}
