/*
function perkalian (a,b)//parameter{
    //expression
    return a*b
}
*/
//function 1
function multiply(a,b) {
    return a * b
}
let hasil = multiply(10,11)
console.log(hasil)
console.log(multiply(5,9))
//function 2
function getGreeting(name,language) {
    if (language=="inggris"){
        console.log(`Good morning ${name}`)
    } else if (language == "French"){
        console.log(`Bonjour ${name}`)
    } else if (language == 'Japan'){
        console.log(`Ohayou ${name}`)
    } else {
        console.log(`Selamat Pagi ${name}`)
    }
}
getGreeting("Rizki","Japan")
// expression function
//function disimpan didalam sebuah variable atau dalam golang disebut anynomous function
let greeting = function(name,language){
    if (language=="inggris"){
        return `Good morning ${name}`
    } else if (language == "French"){
        return `Bonjour ${name}`
    } else if (language == 'Japan'){
        return `Ohayou ${name}`
    } else {
        return `Selamat pagi ${name}`
    }
}
console.log(greeting("Rizki","indo"))