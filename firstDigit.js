//find first digit from the string
function firstChar(str){
    for(let i=0; i<str.length; i++){
        if(str[i] >='0' && str[i] <='9'){
            return str[i];
        }
    }
    return null;
}
const result = firstChar('hey');
console.log(result);