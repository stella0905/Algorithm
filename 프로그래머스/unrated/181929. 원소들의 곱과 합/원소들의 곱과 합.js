function solution(num_list) {
    const x = num_list.reduce((a,b)=> a*b)
    const sum = num_list.reduce((a,b)=> a+b)**2
    return x < sum ? 1: 0;
}