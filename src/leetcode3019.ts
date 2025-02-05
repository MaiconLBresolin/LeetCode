function countKeyChanges(s: string): number {
  let arr = s.toLowerCase().split("");
  let count: number = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1] && i !== arr.length - 1) {
      count++;
    }
  }
  return count;
}
