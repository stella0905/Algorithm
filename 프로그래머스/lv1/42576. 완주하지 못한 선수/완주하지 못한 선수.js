function solution(participant, completion) {
  let map = new Map();
  for (let i = 0; i < participant.length; i++) {
    if (!map.has(participant[i])) {
      map.set(participant[i], 1);
    } else {
      map.set(participant[i], map.get(participant[i]) + 1);
    }
  }
  for (let i = 0; i < completion.length; i++) {
    if (map.has(completion[i])) {
      map.set(completion[i], map.get(completion[i]) - 1);
    }
  }
  let result = "";
  for (let key of map.keys()) {
    if (map.get(key) === 1) {
      result = key;
    }
  }
  return result;
}
console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
);
