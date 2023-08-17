function solution(array, commands) {
  let result = [];
  for (let i = 0; i < commands.length; i++) {
    const a = array
      .slice(commands[i][0] - 1, commands[i][1])
      .sort((a, b) => a - b);
    result.push(a[commands[i][2] - 1]);
  }
  return result;
}