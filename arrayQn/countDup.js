//count how many duplicates included in the array
function countDup(arr){
    let count = 0;
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] === arr[j]){
                count ++;
            }
        }
    }
    return count;
}

const result = countDup([1, 5, 3, 5, 3, 3, 3]);
console.log(result);
//this is harder problem to count non repetaed count :)