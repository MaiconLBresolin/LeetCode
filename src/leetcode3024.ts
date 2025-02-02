function triangleType(nums: number[]): string {
  const countMap: Record<number, number> = {};
  let triangulo: string = "";
  for (const num of nums) {
    countMap[num] = (countMap[num] || 0) + 1;
  }
  const [a, b, c] = [...nums].sort((x, y) => x - y);
  if (a + b <= c) {
    triangulo = "none";
  } else {
    const numero = Math.max(...Object.values(countMap));
    if (numero === 3) {
      triangulo = "equilateral";
    } else if (numero === 2) {
      triangulo = "isosceles";
    } else {
      triangulo = "scalene";
    }
  }
  return triangulo;
}

triangleType([2, 8, 4]);
