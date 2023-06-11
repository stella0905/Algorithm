function solution(num_list) {
    const lastNum = num_list[num_list.length-1]
    const beforeNum = num_list[num_list.length-2]
    const result = lastNum > beforeNum? (lastNum-beforeNum) : (lastNum*2);

    const pushResult = num_list.push(result)

    return num_list

}