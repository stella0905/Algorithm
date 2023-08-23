function solution(numLog) {
  let result = "";
  for (let i = 0; i < numLog.length - 1; i++) {
    if (numLog[i + 1] - numLog[i] === 1) {
      result += "w";
    }
    if (numLog[i + 1] - numLog[i] === -1) {
      result += "s";
    }
    if (numLog[i + 1] - numLog[i] === 10) {
      result += "d";
    }
    if (numLog[i + 1] - numLog[i] === -10) {
      result += "a";
    }
  }
  return result;
}