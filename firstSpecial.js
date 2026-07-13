//finding the first special character from the string
function firstSpecial(str){
    for(let i=0; i<str.length; i++){
        if(!((str[i] >='0' && str[i] <= '9') || (str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 'A' && str[i] <= 'Z'))){
            return str[i];
        }
    }
    return null;
}

const result = firstSpecial('hello23665d{$#45892345');
console.log(result);