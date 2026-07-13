//find the first upper case letter from the string
function firstUpper(str){
    for(let i=0; i<str.length; i++){
        if(str[i] >= 'A' && str[i] <= 'Z'){
            return str[i];
        }
    }
    return null;
}
const result = firstUpper('helloWorld');
console.log(result);