function solution(array) {
  let result = []
  result.push(Math.max(...array))
  array.map((a, idx) => {
    if (a === result[0]) {
      result.push(idx)
    }
  })
  return result;
}
console.log(solution([9, 10, 11, 8]))