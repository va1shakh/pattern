function lastUpper(str){
    for(let i=str.length - 1; i>=0; i--){
        if(str[i] >= 'A' && str[i] <= 'Z'){
            return str[i];
        }
    }
    return null;
}

const result = lastUpper('JavaScript');
console.log(result);