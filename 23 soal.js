function minimal(a,b) {
    if (a > b){  
        return b;
    } else if (a == b){
        return a;
    }
    return a;
}
console.log(minimal(1,4))
console.log(minimal(3,2))
console.log(minimal(3,3));

function findIndex(array,number) {
    for (let x = 0; x < array.length;x++){
        if (array[x]==number)
        return x;
    }
    return -1;
}
console.log(findIndex([1,2,3,4,5],3));
console.log(findIndex([1,2,3,4,5],6));
console.log(findIndex([1,2,3,4,5],5));
function calculate(value) {
    return value < 2 ? value : (calculate(value - 1) + calculate(value - 2) + calculate(value - 3));
}

console.log(calculate(3));