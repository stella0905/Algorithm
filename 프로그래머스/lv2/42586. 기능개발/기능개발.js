function solution(progresses, speeds) {
  // 1. 배열끼리 얼마나 남았는지 확인한다.
  let arr = [];
  for (let i = 0; i < speeds.length; i++) {
    arr.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  }

  // 2. 배열 앞에부터 100이 될때 뒤에 남아있는거에 100이있다면 같이 배포한다.
  // 3. 2번에 같이 배포할때 바로 뒤에있는 자리에 순서가 100이 아니라면 끝내고 당장 거기까지만 배포한다.
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let count = 1;
    for (let j = i + 1; j <= arr.length; j++) {
      console.log("i", i);
      if (arr[i] >= arr[j]) {
        count++;
      } else {
        i += count - 1;
        break;
      }
      console.log("count", count);
    }
    result.push(count);
  }

  // result.filter((a) => a !== 0);
  return result;
}

console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
