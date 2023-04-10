function solution(s) {
  let arrs = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  let result = s

  for (let i = 0; i < arrs.length; i++) {
    if (result.includes(arrs[i])) {
      result = result.replaceAll(arrs[i], i)
    }
  }

  return Number(result)
}