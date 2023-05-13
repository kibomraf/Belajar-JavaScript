//destructing objek
let person = {
    name:"Muhamad Rizki",
    usia:23,
    address : "purwakarta"
};
let {name,usia,address, isMale = true} = person; //add value with the out of key object

console.log(`Hallo my name is ${name}, my age is ${usia},and i live in ${address} apakah dia laki laki ?${isMale}`);
//destructing assigment
let human = {
    fullname:"kibo sukibo",
    age: 23
};
let fullname = "bokir subokir";
let age = 28;
console.log("sebelum destructin assigment",fullname,age);

({ fullname,age }=human);

console.log("seletah destructing assigment : ",fullname,age);
//assigning with different local variables
let {fullname : localfullname,age : localfullage} = human;
console.log(localfullname);
console.log(localfullage);
// destructing array
let array = ["muhamad","rizki","arif","fadillah"];
let [a,b,c,d] = array;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
let [,x, ,]=array;
console.log(x);
//destrcting assigment array
let A = "ahmad";
let B= "habibi";
[A,B]= array;
console.log(A,B);
//swap value array
[A,B]=[B,A];
console.log(A,B);
//default value
let food = ["nasgor"];
let [myfood,hisfood]=food;
console.log(myfood,hisfood);
let [wefood,herfood = "pecel"]=food;
console.log(wefood,herfood);


