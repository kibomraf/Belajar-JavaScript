let a = "a"
if (a < 5) {
    console.log("kamu remedial");
} else if (a>=5 && a<7){
    console.log("kamu lulus dengan baik");
} else if ( a >= 7 && a< 10){
    console.log("kamu lulus dengan sangat baik");
}else if(a==10){
    console.log("kamu lulus dengan sempurna");
} else {
    console.log("kamu nilanya salah");
}
let bahasa = "javanese"
let greeting = "Hello, good Morning";
if (bahasa === "Indonesia"){
    greeting = "Hai, selamat pagi"
} else {
    greeting = "Bahasa tidak dimengerti"
}
console.log(greeting);