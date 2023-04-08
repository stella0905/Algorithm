function solution(arr, divisor) {
  const newArr = arr.sort((a, b) => a - b)
  let result = []
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] % divisor === 0) {
      result.push(newArr[i])
    }
  }
  return result.length > 0 ? result : [-1]
}