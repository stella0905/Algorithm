function solution(num) {
let i = 0
let number = num
if (num === 1) {
return i = 0
}
while (i <= 500) {
if (number % 2 === 0) {
number = number / 2
} else {
number = (number * 3) + 1
}
i++

if (number === 1) {
break
}
}
return number === 1 ? i : -1
}