function solution(sizes) {
  let minArr = []
  let maxArr = []
  for (let i = 0; i < sizes.length; i++) {
    let arr = sizes[i].sort((a, b) => a - b)
    minArr.push(arr[0])
    maxArr.push(arr[1])
  }

  return Math.max(...minArr) * Math.max(...maxArr);
}