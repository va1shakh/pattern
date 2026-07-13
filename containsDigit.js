//check whether the string contains digit
function containsDigit(str){
    for(let i=0; i<str.length; i++){
        if(str[i] >='0' && str[i] <= '9'){
            return true;
        }
    }
    return false;
}

const result = containsDigit('abcd%^8&$');
console.log(result);