function buildPattern(number){
    let pattern='';
    for(let i=1;i<=number;i++){
        for(let j=0;j<i;j++){
            pattern+='*'
            
        }
        pattern+='\n'
    }
    return pattern
}
module.exports={buildPattern}
