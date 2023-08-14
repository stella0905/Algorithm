function solution(array, n) {
  const arr = [...array]

  const copyArr = arr.map((e) => {
    if (e - n < 0) {
      return (n - e)
    } else {
      return e - n
    }
  })
  const newArr = []
  copyArr.map((e, i) => {
    if (e === Math.min(...copyArr)) {
      newArr.push(arr[i])
    }
  })
  return newArr.sort((a, b) => a - b)[0]
}
console.log(solution([0, 10, 11, 14, 12, 1, 2, 3], 13))