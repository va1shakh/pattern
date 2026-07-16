//find most frequent number from the array
function mostFreq(arr){
    freq = {};
    let most = 0;
    let frequent;
    for(let i=0; i<arr.length; i++){
        if(freq[arr[i]] === undefined){
            freq[arr[i]] = 1;
        }
        else{
            freq[arr[i]] += 1;
        }
    }
    for(let key in freq){
        if(freq[key] > most){
            most = freq[key];
            frequent = key;
        }
    }
    return frequent;
}

const result = mostFreq([1, 2, 3, 1, 2, 1, 4]);
console.log(result);