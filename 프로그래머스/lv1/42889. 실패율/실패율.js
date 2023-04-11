function solution(N, stages) {
  let percentage = []
  for (let i = 1; i <= N; i++) {
    //스테이지에 도달은 했으나 아직 클리어하지 못한 플레이어 수
    let stageCount = []

    //스테이지에 도달한 플레이어 수 
    let successCount = []
    for (arr of stages) {
      if (arr >= i) {
        successCount.push(arr)
      }
      if (arr === i) {
        stageCount.push(arr)
      }
    }

    // console.log(`stageCount:${stageCount}`, `successCount:${successCount}`)
    percentage.push(failCount(stageCount.length, successCount.length))
  }
  let result = []
  for (let i = 0; i < percentage.length; i++) {
    result.push([i + 1, percentage[i]])
  }
  let Sort = result.sort((a, b) => b[1] - a[1])
  let fffff = []
  for (s of Sort) {
    fffff.push(s[0])
  }

  function failCount(stageCount, successCount) {
    return stageCount / successCount
  }
  return fffff;
}