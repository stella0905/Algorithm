function solution(n) {
  const arr = [...String(n)]
  return arr.reverse().map((v) => +v);
}