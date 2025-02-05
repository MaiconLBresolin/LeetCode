function judgeCircle(moves: string): boolean {
  let arr = moves.split("");
  let u: number = arr.filter((letter) => letter === "U").length;
  let d: number = arr.filter((letter) => letter === "D").length;
  let r: number = arr.filter((letter) => letter === "R").length;
  let l: number = arr.filter((letter) => letter === "L").length;

  if (u === d && r === l) {
    return true;
  } else {
    return false;
  }
}

judgeCircle("LL");
