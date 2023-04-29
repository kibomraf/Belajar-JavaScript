//global variable
let number = 10;
//dapat diakses oleh parent and child
function myfunction(){
    //local variable parrent bisa diakses oleh parent and child
    let a = "a";
    function myfunction2 (){
        //local variable yang hanya bisa diakses oleh child dan seterusnya
        let b ="b"
    }
}
//contoh
function getNumbers(num) {
    //tanpa let atau const maka variable menjadi global
    numbers = num * num
    return numbers
}
let numbers = 1;
let result = getNumbers(10);
console.log(numbers)
