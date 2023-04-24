function solution(names) {
  const chunked = []
  let index = 0

  while (index < names.length) {
    chunked.push(names.slice(index, index + 5))
    index += 5
  }

  return chunked.map((chunk) => chunk[0]);
}