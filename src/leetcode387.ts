function firstUniqChar(s: string): number {
  let arr = s.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
      let index = arr.indexOf(arr[i]);
      return index;
    }
  }
  return -1;
}
