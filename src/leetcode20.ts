function isValid(s: string): boolean {
  const pilha: string[] = [];

  const combina: { [key: string]: string } = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (const letra of s) {
    if (letra in combina) {
      if (pilha.length === 0 || pilha.pop() !== combina[letra]) {
        return false;
      }
    } else {
      pilha.push(letra);
    }
  }

  return pilha.length === 0;
}
