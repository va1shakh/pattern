//find most used character from the string
function mostUsedChar(str){
    let freq = {};
    let larger = 0;
    let frequent;
    for(let i=0; i<str.length; i++){
        if(freq[str[i]] === undefined){
            freq[str[i]] = 1; 
        }
        else{
            freq[str[i]] += 1;
        }
    } 
    for(let key in freq){
        if(freq[key] > larger){
            larger = freq[key];
            frequent = key;
        }
    }
    return frequent;
}
const result = mostUsedChar("aabbbbcc");
console.log("Most used character = " + result);