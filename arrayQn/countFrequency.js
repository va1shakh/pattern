//count frequency of each number in the array
function countFrequency(arr){
    let freq = {};
    for(let i=0; i<arr.length; i++){
        if(freq[arr[i]] === undefined){
            freq[arr[i]] = 1;
        }
        else{
            freq[arr[i]] += 1;
        }
    }
    return freq;
}

const result = countFrequency([1, 2, 3, 1, 2, 1]);
console.log(result);