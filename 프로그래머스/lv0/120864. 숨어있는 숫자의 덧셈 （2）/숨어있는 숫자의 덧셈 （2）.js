function solution(my_string) {
  let output = my_string.match(/[0-9]+/g)
  if (output === null) {
    return 0
  } else {
    return output.map((v) => +v).reduce((a, b) => a + b)
  }

}