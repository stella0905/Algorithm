function solution(t, p) {
    var answer = [];
    for(let i = 0; i<=t.length-p.length; i++){
        let subString = t.slice(i, i + p.length)
        answer.push(subString)
    }
    return answer.filter((a)=> a<=p).length;
}