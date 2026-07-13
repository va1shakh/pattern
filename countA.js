//count how many times letter ' a ' used in a string
function countA(str){
    let count = 0;
    for(i=0; i<str.length; i++){
        if(str[i] === 'a' || str[i] === 'A'){
            count ++;
        }
    }
    return count;
}
const result = countA('apple');
console.log(result);
