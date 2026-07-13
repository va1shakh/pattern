//find last digit from the string
function lastDigit(str){
    for(let i= str.length - 1; i>=0; i--){
        if(str[i] >= '0' && str[i] <= '9'){
            return str[i];
        }
    }
    return null;
}
const result = lastDigit('434534wel67g76&&come2the2fgdfg{');
console.log(result);