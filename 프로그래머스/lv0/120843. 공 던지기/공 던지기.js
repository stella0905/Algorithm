function solution(numbers, k) {
  let index = 0
  for (let i = 0; i < k - 1; i++) {
    index += 2

    if (numbers.length < index) {
      index = index - numbers.length
    }
  }


  return numbers[index];
}