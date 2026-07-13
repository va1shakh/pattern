//count special characters from a string
function countSpecial(str){
    let count = 0;
    for(let i=0; i<str.length; i++){
        if(!((str[i] >= 'A' && str[i] <= 'Z' )|| (str[i] >= 'a' && str[i] <= 'z' ) || (str[i] >= '0' && str[i] <= '9'))){
            count ++;
        } 
    }
    return count;
}
let result = countSpecial('hello{{{[[[(!@&95670');
console.log(result);