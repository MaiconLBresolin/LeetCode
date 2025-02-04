function checkIfPangram(sentence: string): boolean {
  const alfabeto = new Set<string>();

  for (const char of sentence.toLowerCase()) {
    if (char >= "a" && char <= "z") {
      alfabeto.add(char);
    }
    if (alfabeto.size === 26) {
      console.log("true");
      return true;
    }
  }
  return false;
}

checkIfPangram("thequickbrownfozjumpsoverthelazydog");
