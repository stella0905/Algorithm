function solution(arr) {
	const min = Math.min(...arr)
	const newArr = arr.filter((e) => e > min)
	return newArr.length ? newArr : [-1]
}