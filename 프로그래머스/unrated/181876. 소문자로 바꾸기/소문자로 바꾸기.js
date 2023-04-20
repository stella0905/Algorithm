function solution(myString) {
  const arr = [...myString]
  const result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i].toLowerCase())
  }
  return result.join("");
}
console.log(solution("aBcDeFg"))