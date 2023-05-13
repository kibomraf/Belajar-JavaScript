//function object parameter
let user = {
    id : 1,
    fullname: "Muhamad Rizki Arif Fadillah",
    alamat: "Purwakarta",
};
function greeting({fullname,alamat}){
    return `hello my name is ${fullname} and i'am from ${alamat}`
};
let sayGreeting = greeting(user)
console.log(sayGreeting)
//default parameter
function multiply(a,b){
    let result = 0;
    result = a ** b;
    console.log(`${a}^${b} = ${result}`);
}
multiply(1)
// rest parameter atau digolang variadic function
function variadic(...numbers){
    let result = 0;
    for (let number of numbers){
        result += number;
    }
    return result;
}
console.log(variadic(1,2,3,4,5))
//arrow function
let sayGreet = (name,address)=>{
return `hello my name is ${name}, i'm from ${address}`
}
console.log(sayGreet('Rizki',"Purwakarta, jawa barat"));
// jika parameternya satu dan ekspressionya satu baris bisa lebih singkat
let sayHello = name => console.log(`Hello my name is ${name}`);
sayHello("Muhamad Rizki Arif Fadillah");
//jik tanpa parameter itu harus ada kurung buka dan tutup
let ggwp = () => console.log("Hai perkenalkan nama saya Muhamad Rizki kamu bisa memanggil saya Rizki");
ggwp();
//tanpa menuliskan return
let kali = (a,b)=> a*b;
console.log(kali(100,98))