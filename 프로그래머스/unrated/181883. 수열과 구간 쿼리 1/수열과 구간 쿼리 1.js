function solution(arr, queries) {
  let result = [...arr]
  for (let i = 0; i < queries.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (queries[i][0] <= j && queries[i][1] >= j) {
        result[j] = result[j] + 1
      }
    }
  }
  return result;
}

console.log(solution([0, 1, 2, 3, 4], [[0, 1], [1, 2], [2, 3]]))