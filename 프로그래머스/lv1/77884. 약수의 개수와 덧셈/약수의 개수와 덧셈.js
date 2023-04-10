function solution(left, right) {
  let number = []
  for (let i = left; i <= right; i++) {
    number.push(i)
  }
  let result = []

  for (let i = 0; i < number.length; i++) {
    let count = 0
    for (let j = 1; j <= number[i]; j++) {
      if (number[i] % j === 0) {
        count++
      }
    }

    if (count % 2 !== 0) {
      result.push(number[i] * -1)
    } else {
      result.push(number[i])
    }
  }
  return result.reduce((a, b) => a + b);
}