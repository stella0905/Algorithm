
function solution(s) {
  const arr = [...s]
  const count = {}
  for (let i = 0; i < arr.length; i++) {
    if (count[arr[i]]) {
      count[arr[i]]++
    } else {
      count[arr[i]] = 1
    }
  }
  const result = []
  for (let i = 0; i < arr.length; i++) {
    if (count[arr[i]] === 1) {
      result.push(arr[i])
    }
  }
  return result.sort().join("")
}
console.log(solution("abcabcadc"))