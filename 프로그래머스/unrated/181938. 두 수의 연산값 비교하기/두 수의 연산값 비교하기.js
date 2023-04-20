

function solution(a, b) {

  const result = String(a) + String(b) >= 2 * a * b ? String(a) + String(b) : 2 * a * b

  return Number(result);
}
console.log(solution(2, 91))