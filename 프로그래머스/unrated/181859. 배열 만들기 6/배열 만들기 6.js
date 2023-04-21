function solution(arr) {
  let stk = []
  let i = 0
  while (true) {

    if (stk.length === 0) {
      stk.push(arr[i])
      i++

    } else if (stk.length !== 0) {
      if (stk[stk.length - 1] === arr[i]) {
        stk.pop()
        i++
      } else {
        stk.push(arr[i])
        i++
      }
    }

    if (i === arr.length) {
      break
    }

  }
  return stk.length ? stk : [-1]
}
console.log(solution([0, 1, 0, 1, 0]))