//find first duplicate number from the array
function firstDuplicate(arr){
    for(let i=0; i<arr.length; i++){

        for(let j=i+1; j<arr.length; j++){
            if(arr[i] === arr[j]){
                return arr[i];
            }
        }
    }
    return null;
}

const result = firstDuplicate([1, 5, 3, 15, 2]);
console.log(result);