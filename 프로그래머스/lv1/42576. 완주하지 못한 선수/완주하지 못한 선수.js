function solution(participant, completion) {
  const myMap = new Map()
  for (let par of participant) {
    if (!myMap.has(par)) {
      myMap.set(par, 1)
    } else {
      myMap.set(par, myMap.get(par) + 1)
    }
  }
  for (let com of completion) {
    if (myMap.has(com)) {
      myMap.set(com, myMap.get(com) - 1)
    }
  }
  for (const key of myMap.keys()) {
    if (myMap.get(key) === 1) {
      return key
    }
  }
}