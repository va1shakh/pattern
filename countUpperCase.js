//count Upper case letters from a string
function countUpper(str){
    let count = 0;
    for(let i=0; i<str.length; i++){
        if(str[i] >= 'A' && str[i] <= 'Z'){
            count ++;
        } 
    }
    return count;
}
let result = countUpper('He^%&%$^&LLo');
console.log(result);
//str[i] >= 'A' && str[i] <= 'Z'
//smaller case letters are greater than upper case letter because everyt letters have their own unicode value