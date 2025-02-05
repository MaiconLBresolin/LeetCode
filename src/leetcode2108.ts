function firstPalindrome(words: string[]): string {
  let revWord: string = "";
  for (let i = 0; i < words.length; i++) {
    revWord = words[i].split("").reverse().join("");
    if (revWord === words[i]) {
      return words[i];
    }
  }
  return "";
}
