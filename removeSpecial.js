//remove special characters from a string
function removeSpecial(str){
    let newStr = "";
    for(let i=0; i<str.length; i++){
        if((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= '0' && str[i] <= '9') || (str[i] >= 'A' && str[i] <= 'Z')){
            newStr = newStr + str[i];
        }
    }
    return newStr;
}
const result = removeSpecial('hello^$%^*$%^*%*%^&*{}[]3446876796789');
console.log(result);