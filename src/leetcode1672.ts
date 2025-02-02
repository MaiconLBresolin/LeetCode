function maximumWealth(accounts: number[][]): number {
  let length = accounts.length;
  let arrTotais: number[] = [];
  for (let i = 0; i < length; i++) {
    let arr = accounts[i];
    let sum = arr.reduce(function (x, y) {
      return x + y;
    }, 0);
    arrTotais.push(sum);
  }
  let maior: any = arrTotais.sort((a, b) => a - b).pop();
  return maior;
}

maximumWealth([
  [1, 5],
  [7, 3],
  [3, 5],
]);
