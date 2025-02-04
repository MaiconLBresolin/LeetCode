function threeConsecutiveOdds(arr: number[]): boolean {
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] % 2 != 0 && arr[i + 1] % 2 != 0 && arr[i + 2] % 2 != 0) {
      return true;
    }
  }
  return false;
}

threeConsecutiveOdds([2, 6, 4, 1]);
/*console.log(arr[i]);
console.log(arr[i + 1]);
console.log(arr[i + 2]);
console.log("eh true");
console.log("eh false");*/
