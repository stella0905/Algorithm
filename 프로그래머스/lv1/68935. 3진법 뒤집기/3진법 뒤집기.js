function solution(n) {
  let result = []
  let sum = n
  while (sum > 0) {
    result.push(sum % 3)
    sum = parseInt(sum / 3)
  }
  return result.map((a, index) => a * (3 ** (result.length - 1 - index)))
    .reduce((a, b) => a + b);
}