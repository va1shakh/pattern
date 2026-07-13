//count even numbers from an Array
function countEven(arr){
    let count = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2 === 0){
            count ++;
        }
    }
    return count;
}

const result = countEven([1, 2, 3, 4, 5, 6]);
console.log(result);