//make number to string
function no2str(arr){
    return arr
    .map((element) => {
        return String(element);
    });
}

const result = no2str([1, 2, 3, 4]);
console.log(result);