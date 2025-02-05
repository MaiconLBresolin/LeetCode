function xorOperation(n: number, start: number): number {
  let arr: number[] = Array(n)
    .fill(0)
    .map((_, index) => start + 2 * index);
  let finalArr: string[] = [];
  let aux: string = "";
  for (let i = 0; i < arr.length; i++) {
    aux = arr[i].toString(2);
    finalArr.push(aux);
    console.log(finalArr);
  }

  return finalArr.reduce((acc, bin) => acc ^ parseInt(bin, 2), 0);
}

xorOperation(4, 3);
