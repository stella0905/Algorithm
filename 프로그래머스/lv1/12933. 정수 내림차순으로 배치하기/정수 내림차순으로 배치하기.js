function solution(n) {
  const arr = [...String(n)]
  const newArr = arr.sort((a, b) => b - a).join("")
  return Number(newArr);
}