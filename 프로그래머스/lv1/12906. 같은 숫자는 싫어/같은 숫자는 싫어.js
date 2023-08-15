function solution(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (newArr[newArr.length - 1] !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
