function solution(my_string) {
  const ARR = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 65));
  const arr = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 97));
  const resultArr = ARR + ',' + arr
  const Arr = resultArr.split(',')
  const string = [...my_string]
  let result = []
  for (let i = 0; i < Arr.length; i++) {
    if (string.includes(Arr[i])) {
      result.push(string.filter((a) => a === Arr[i]).length)
    } else {
      result.push(0)
    }

  }
  return result;
}
console.log(solution('Programmers'))