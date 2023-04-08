function solution(x) {
  let arr = String(x).split('').map((v) => +v).reduce((a, b) => a + b)

  return x % arr === 0 ? true : false
}