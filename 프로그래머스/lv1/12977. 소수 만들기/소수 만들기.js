function solution(nums) {
  let a = []

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        a.push(nums[i] + nums[j] + nums[k])
      }
    }
  }
  function isPrime(num) {
    if (num === 2)
      return true;

    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  let arr = []
  for (let i = 0; i < a.length; i++) {
    if (isPrime(a[i])) {
      arr.push(a[i])
    }
  }
  return arr.length;
}