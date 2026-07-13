//find first vowel from the string
function firstVowel(str){
    for(let i=0; i<=str.length; i++){
        if(
            str[i] === 'a' || str[i] === 'A' ||
            str[i] === 'e' || str[i] === 'E' ||
            str[i] === 'i' || str[i] === 'I' ||
            str[i] === 'o' || str[i] === 'O' ||
            str[i] === 'u' || str[i] === 'U'
        ){
            return str[i];
        }
    }
    return null;
}

const result = firstVowel('Education');
console.log(result);