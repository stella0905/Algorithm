function solution(list, n) {
    let result = []
    for(let i=0; i <list.length; i+=n ){

            result.push(list[i])

    }
    return result;
}