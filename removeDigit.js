//remove digits from a string
function removeDigit(str){
    let newStr = "";
    for(let i=0; i<str.length; i++){
        if(!(str[i] >='0' && str[i] <='9')){
            newStr = newStr + str[i];
        }
    }
    return newStr;
}
const result = removeDigit('hello&^$%^&1&$%^&2^&$^{}[]3');
console.log(result);