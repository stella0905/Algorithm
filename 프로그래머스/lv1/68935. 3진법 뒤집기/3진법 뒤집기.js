function solution(n) {
  let result = []
  let sum = n
  while (sum >= 3) {
    result.push(sum % 3)
    sum = parseInt(sum / 3)
  }
  if (sum < 3) {
    result.push(sum)
  }
  return result.map((a, index) => a * (3 ** (result.length - 1 - index)))
    .reduce((a, b) => a + b);
}