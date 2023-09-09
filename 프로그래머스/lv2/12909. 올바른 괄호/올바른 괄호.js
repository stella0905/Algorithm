function solution(s){

    let result = 0
    for(let i = 0; i<s.length; i++){
        if(result < 0){
            break
        }
        if(s[i] === '('){
        result += 1
        }else{
            result-=1
        }

    }
    return result === 0
}