function calPoints(operations: string[]): number {
  let points: number = 0;
  let arr: number[] = [];
  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === "+") {
      arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    } else if (operations[i] === "D") {
      arr.push(arr[arr.length - 1] * 2);
    } else if (operations[i] === "C") {
      arr.pop();
    } else {
      arr.push(Number(operations[i]));
    }
  }

  for (let i = 0; i < arr.length; i++) {
    points += arr[i];
  }

  return points;
}

calPoints(["1", "C"]);
