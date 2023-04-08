function solution(s) {
  const arr = s.split(" ")
  const newArr = arr.map((a) => a.split(""))
  let result = []
  for (i of newArr) {
    result.push(i.map((value, index) =>
      index % 2 === 0 ? value.toUpperCase() : value.toLowerCase()))
  }

  return result.map((a) => a.join("")).join(" ")
}