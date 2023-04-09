function solution(arr, divisor) {
  const newArr = arr.sort((a, b) => a - b)
  let result = newArr.filter((a) => a % divisor === 0)

  return result.length ? result : [-1]
}