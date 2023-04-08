
function solution(participant, completion) {
  const myMap = new Map();
  for (let i = 0; i < participant.length; i++) {
    if (!myMap.has(participant[i])) {
      myMap.set(participant[i], 1);
    } else {
      myMap.set(participant[i], myMap.get(participant[i]) + 1)
    }
  }

  for (com of completion) {
    myMap.set(com, myMap.get(com) - 1)
  }
  for (const key of myMap.keys()) {
    if (myMap.get(key) === 1) {
      return key
    }
  }
}