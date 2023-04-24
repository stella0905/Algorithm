function solution(strArr) {
  const arr = strArr.filter((a) => !a.includes("ad"))
  return arr;
}