function solution(n) {
  const sqrt = Math.floor(Math.sqrt(n))
  return sqrt * sqrt === n ? (sqrt + 1) * (sqrt + 1) : -1
}