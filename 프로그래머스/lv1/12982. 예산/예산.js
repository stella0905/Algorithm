function solution(d, budget) {
  let arrs = d.sort((a, b) => a - b)
  let Budget = budget
  let count = 0
  for (arr of arrs) {
    if (arr <= Budget) {
      Budget -= arr
      count++
    }
  }
  return count;
}