function solution(n, arr1, arr2) {

  let binaryNumber1 = arr1.map((num) => formattingLine(num.toString(2), n))
  let binaryNumber2 = arr2.map((num) => formattingLine(num.toString(2), n))
  let result = []

  for (let i = 0; i < binaryNumber1.length; i++) {
    let sum = ""
    for (let j = 0; j < n; j++) {
      if (binaryNumber1[i][j] + binaryNumber2[i][j] >= 1) {
        sum += "#"
      } else {
        sum += " "
      }
    }
    result.push(sum)
  }


  return result;
}

let formattingLine = (line, n) => {
  if (line === n) {
    return line
  }
  return "0".repeat(n - line.length) + line
}