function isPalindrome(x: number): boolean {
  const str: string = x.toString();
  const strReverse = str.split("").reverse().join("");
  if (str === strReverse) {
    return true;
  } else {
    return false;
  }
}
