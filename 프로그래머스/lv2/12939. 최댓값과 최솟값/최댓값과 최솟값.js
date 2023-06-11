function solution(s) {
    const arr = s.split(" ")
    const NumArr = arr.map(Number)
    const max = Math.max(...NumArr)
    const min = Math.min(...NumArr)
    console.log(max)
    return [min,max].join(" ");
}