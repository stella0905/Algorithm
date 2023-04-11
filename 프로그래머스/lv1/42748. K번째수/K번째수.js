function solution(array, commands) {
  let result = []
  for (arr of commands) {
    result.push(sol(array, arr[0], arr[1], arr[2]))
  }

  function sol(array, a, b, c) {
    let arr = array.slice(a - 1, b).sort((a, b) => a - b)

    return arr[c - 1]

  }
  return result
}