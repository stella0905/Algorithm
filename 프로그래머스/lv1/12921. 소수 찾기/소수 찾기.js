function solution(n) {

  let result = 0
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      result++
    }
  }
  function isPrime(num) {
    if (num % 2 === 0) {
      return num === 2 ? true : false;
    }

    const s = parseInt(Math.sqrt(num));

    for (i = 3; i <= s; i += 2) {

      if (num % i === 0) {
        return false;
      }
    }

    return true;
  }
  return result;
}


console.log(solution(10))