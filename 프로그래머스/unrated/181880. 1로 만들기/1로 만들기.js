function solution(num_list) {
  let count = 0;
  for (let i = 0; i < num_list.length; i++) {
    count += division(num_list[i]);
  }
  return count;
}

function division(num) {
  let remaining = num;

  let count = 0;
  while (remaining > 1) {
    if (remaining % 2 === 0) {
      remaining = remaining / 2;
    } else {
      remaining = (remaining - 1) / 2;
    }
    console.log(remaining);
    count++;
  }
  return count;
}