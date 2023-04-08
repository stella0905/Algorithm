function solution(s) {
  const arr = [...s].map((a) => +a)
  return (s.length === 4 || s.length === 6) && arr.every((e) => !isNaN(e))
}