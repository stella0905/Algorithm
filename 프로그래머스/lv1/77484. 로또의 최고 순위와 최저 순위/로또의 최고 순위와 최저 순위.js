function solution(lottos, win_nums) {

  let result = 0
  let number = lottos.filter((a) => a === 0).length
  for (let i = 0; i < 6; i++) {
    if (win_nums.includes(lottos[i])) {
      result++
    }
  }

  let fun = (result) => {
    switch (result) {
      case 2:
        return 5
        break;
      case 3:
        return 4
        break;
      case 4:
        return 3
        break;
      case 5:
        return 2
        break;
      case 6:
        return 1
        break;
      default:
        return 6
        break;
    }
  }
  return [fun(result + number), fun(result)];
}