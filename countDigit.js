//count how many digits included in the string
function countDigit(str){
    let count = 0;
    for(let i=0; i<str.length; i++){
        if(str[i] >= '0' && str[i] <='9'){
            count ++;
        }
    }
    return count;
}
result = countDigit('He)!^*&%$&*llo123');
console.log(result);