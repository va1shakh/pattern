//find the count of each number in the array 
function frequency(arr){
    let freq = {};
    arr.forEach(element => {
        if(freq[element] === undefined){
            freq[element] = 1;
        }
        else{
            freq[element] += 1;
        }
    });
    return freq;
}

const result = frequency([1, 2, 1, 3, 2, 1]);
console.log(result);