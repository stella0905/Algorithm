function solution(emergency) {
  let result = [];
  const sortArr = [...emergency].sort((a, b) => b - a);
  for (let i = 0; i < emergency.length; i++) {
    for (let j = 0; j < emergency.length; j++) {
      if (emergency[i] === sortArr[j]) {
        result.push(j + 1);
      }
    }
  }
  return result;
}