//contains only positive
function containsOnlyPositive(arr){
    for(let i=0; i<arr.length; i++){
        if(!(arr[i] >= 0)){
            return false;
        }
    }
    return true;
}

const result = containsOnlyPositive([-4,6,2,0]);
console.log(result);