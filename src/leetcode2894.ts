function differenceOfSums(n: number, m: number): number {
  let arr: number[] = Array(n)
    .fill(0)
    .map((_, i) => i + 1);
  let arrDiv: any[] = [];
  let arrNot: any[] = [];
  let divCount: number = 0;
  let notCount: number = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % m === 0) {
      arrDiv.push(arr[i]);
    } else {
      arrNot.push(arr[i]);
    }
  }
  for (let i = 0; i < arrDiv.length; i++) {
    divCount += arrDiv[i];
  }
  for (let i = 0; i < arrNot.length; i++) {
    notCount += arrNot[i];
  }
  return notCount - divCount;
}

differenceOfSums(5, 1);
