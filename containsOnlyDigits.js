//check whether the string only contains digit
function containsOnlyDigits(str){
    for(let i=0; i<str.length; i++){
        if(!(str[i] >= '0' && str[i] <= '9')){
            return false;
        }
    }  
    return true;
}
const result = containsOnlyDigits('864579h79');
console.log(result);