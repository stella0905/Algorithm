function solution(n) {
  let arr = [...String(n)].map((v) => +v)
  return arr.reduce((a, b) => a + b);
}