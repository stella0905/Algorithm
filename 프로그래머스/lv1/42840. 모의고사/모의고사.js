function solution(answers) {
	const a = [1, 2, 3, 4, 5]
	const b = [2, 1, 2, 3, 2, 4, 2, 5]
	const c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
	const func = (number, answers) => {
		let result = 0
		for (let i = 0; i < answers.length; i++) {
			if (number[i % number.length] === answers[i]) {
				result++
			}
		}
		return result
	}
	const result = [func(a, answers), func(b, answers), func(c, answers)]

	let newArr = []
	for (let i = 0; i < 3; i++) {
		if (result[i] === Math.max(...result)) {
			newArr.push(i + 1)
		}
	}
	return newArr;
}