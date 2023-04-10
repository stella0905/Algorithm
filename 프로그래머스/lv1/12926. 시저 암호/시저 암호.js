function solution(s, n) {
  const arrs = [...s]
  const newArr = []
  for (let i = 0; i < arrs.length; i++) {
    if (arrs[i].charCodeAt() !== 32) {
      if ((arrs[i].charCodeAt() + n) > 122) {
        newArr.push(arrs[i].charCodeAt() + n - 26)
      } else if ((arrs[i].charCodeAt()) < 122 && (arrs[i].charCodeAt()) >= 97) {
        newArr.push(arrs[i].charCodeAt() + n)
      } else if ((arrs[i].charCodeAt() + n) > 90) {
        newArr.push(arrs[i].charCodeAt() + n - 26)
      } else if ((arrs[i].charCodeAt()) < 90 && (arrs[i].charCodeAt()) >= 65) {
        newArr.push(arrs[i].charCodeAt() + n)
      }
    } else { newArr.push(arrs[i].charCodeAt()) }
  }


  const number = String.fromCodePoint(...newArr)

  return number;
}