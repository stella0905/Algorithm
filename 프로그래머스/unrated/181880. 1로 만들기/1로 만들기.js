function solution(num_list) {

  let count = 0
  for (num of num_list) {
    let result = num

    while (result !== 1) {

      if (result % 2 === 0) {
        result = result / 2


      } else {
        result = (result - 1) / 2
      }
      count++

      if (result === 3 || result === 2) {
        count++;
        break
      }
    }
  }

  return count
}
console.log(solution([12, 4, 15, 1, 14]))