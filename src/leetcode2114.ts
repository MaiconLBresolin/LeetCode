function mostWordsFound(sentences: string[]): number {
  let length = sentences.length;
  let arrSize: number[] = [];
  for (let i = 0; i < length; i++) {
    let count = sentences[i].trim().split(/\s+/).length;
    arrSize.push(count);
    console.log(arrSize);
  }
  let maior: any = arrSize.sort((a, b) => a - b).pop();
  console.log(maior);
  return maior;
}

mostWordsFound([
  "alice and bob love leetcode",
  "i think so too",
  "this is great thanks very much",
]);
