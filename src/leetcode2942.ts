function findWordsContaining(words: string[], x: string): number[] {
  return words.reduce((is, w, i) => {
    if (w.includes(x)) {
      is.push(i);
    }
    return is;
  }, [] as number[]);
}
