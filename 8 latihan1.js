//soal pertama 
//Buatlah program yang meminta pengguna untuk memasukkan dua angka, 
//lalu menampilkan hasil penjumlahan, pengurangan, perkalian, dan pembagian dari dua angka tersebut.
console.log("Soal 1:\nBuatlah program yang meminta pengguna untuk memasukkan dua angka, lalu menampilkan hasil penjumlahan, pengurangan, perkalian, dan pembagian dari dua angka tersebut.\n")
let angka1 = 10
let angka2 = 4
console.log(`Angka pertama :${angka1}\nAngka Kedua : ${angka2}`)
console.log(`Perjumlahan ${angka1} + ${angka2} = ${angka1+angka2}`)
console.log(`Pengurangan ${angka1} - ${angka2} = ${angka1-angka2}`)
console.log(`Perkalian ${angka1} x ${angka2} = ${angka1*angka2}`)
console.log(`Pembagian ${angka1} / ${angka2} =  ${angka1/angka2}`)
console.log(`Modulus ${angka1} % ${angka2} = ${angka1%angka2}`)
console.log(`${angka1} pangkat ${angka2} = ${angka1**angka2}`)
console.log(`Increment ${++angka1} Decrement ${--angka2}`)
console.log("\nSoal 2:\nBuatlah program yang meminta pengguna untuk memasukkan sebuah kata, lalu menampilkan jumlah karakter dalam kata tersebut.")
let nama = "Muhamad Rizki Arif Fadillah"
console.log(`Jumlah dari karakter "${nama}" adalah ${nama.length}`)
console.log("\nSoal 3:\nBuatlah program yang meminta pengguna untuk memasukkan sebuah bilangan bulat, lalu menampilkan apakah bilangan tersebut genap atau ganjil.")
let index = 23
if (index%2==1){
    console.log(`angka ${index} adalah ganjil`)
} else {
    console.log(`angka ${index} adalah genap`)
}
console.log("\nSoal 4:\nBuatlah program yang meminta pengguna untuk memasukkan sebuah bilangan bulat, lalu menampilkan apakah bilangan tersebut genap atau ganjil.")
let indek = -10
if (indek < 0){
    console.log(`Ankag ${indek} adalah negatif`)
} else {
    console.log(`Angka ${indek} adalaha positif`)
}
console.log("\nSoal 5:\nBuatlah program yang menampilkan bilangan ganjil dari 1 hingga 50")
for(let soal5 = 0;soal5<=50;soal5++){
    if (soal5%2==1){
        console.log(`${soal5} adalah ganjil`)
    } else {
        console.log(`${soal5} adalah genap`)
    }
}
console.log("\nSoal 6:\nBuatlah program yang menampilkan bilangan prima dari 1 hingga 100.")
for (let soal6 = 2;soal6<=100;soal6++){
    let prima = true
    for(let soal6a=2;soal6a<soal6;soal6a++){
        if (soal6%soal6a == 0){
            prima = false
            break
        }
    }
    if (prima){
        console.log(`prima : ${soal6}`)
    }
}
console.log("\nSoal 7:\nBuatlah program yang meminta pengguna untuk memasukkan sebuah kata atau kalimat, lalu menampilkan jumlah huruf vokal dan konsonan dalam kata atau kalimat tersebut.")
let soal7 = "Latihan soal ke tuju"
let vokal = 0
let konsonan = 0
for (let a =0;a<soal7.length;a++){
    let kata = soal7[a].toLowerCase()
    if (kata === "a" || kata === "i" || kata === "u" || kata === "e" || kata === "o"){
        vokal++

    }else if (kata >= "a"&&kata<="z") {
        konsonan++
    }
}
console.log(`Kata "${soal7}" jumlah vokal ${vokal}, jumlah konsonan ${konsonan}`)
console.log("\nsSoal 8:\nBuatlah program yang meminta pengguna untuk memasukkan sebuah bilangan bulat, lalu menampilkan hasil faktorial dari bilangan tersebut.")
let faktorial = 1
let soal8 = 10
for(let a = 1;a<=soal8;a++){
    faktorial *= a
}
console.log(faktorial)
console.log("\nSoal 9:\nBuatlah program yang meminta pengguna untuk memasukkan sebuah kata atau kalimat, lalu menampilkan kata atau kalimat tersebut dibalik.")
let katakata = "susu murni nasional"
let hasil =""
for(let x = katakata.length - 1;x>=0;x--){
 hasil += katakata[x]
}
console.log(hasil)
console.log("\nSoal 10:\nBuat program fibnacci")
let a = 0
let b = 1
let hasil10 = 0
for(let z = 1;z<=10;z++){
    hasil10 = a + b
    a = b
    b = hasil10
}
console.log(hasil10)