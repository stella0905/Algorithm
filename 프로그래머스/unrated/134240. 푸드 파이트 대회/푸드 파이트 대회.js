function solution(food) {
  let foodNumber = []
  for (let i = 0; i < food.length; i++) {
    if (food[i] % 2 !== 0) {
      foodNumber.push(food[i] - 1)
    } else {
      foodNumber.push(food[i])
    }
  }
  let result = []
  for (let i = 1; i < foodNumber.length; i++) {
    if (foodNumber[i] / 2 >= 1) {
      for (let j = 1; j <= foodNumber[i] / 2; j++) {
        result.push(i)
      }
    }
  }

  return result.join('') + '0' + result.reverse().join('');
}

console.log(solution([1, 7, 1, 2]))