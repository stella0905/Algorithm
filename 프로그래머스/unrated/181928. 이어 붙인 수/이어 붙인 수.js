function solution(num_list) {
    let ZZ = num_list.filter((a)=> a%2===0).join("")
    let hh = num_list.filter((a)=> a%2 !== 0).join("")
    
    return (+ZZ)+(+hh);
}