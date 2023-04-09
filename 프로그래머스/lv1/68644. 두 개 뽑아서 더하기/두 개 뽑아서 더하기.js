function solution(numbers) {
  let result = []

  for (let i = 0; i < numbers.length; i++) {
    numbers.map((a, idx) => {
      if (i !== idx) {
        result.push(a + numbers[i])
      }
    })
  }
  let arr = new Set(result)
  let newArr = [...arr]
  return newArr.sort((a, b) => a - b);
}