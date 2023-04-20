//create object
let person = {
    name : "Muhamad Rizki Arif Fadillah",
    age : 24,
    isMarried : false,
    "tempat tinggal": "Purwakarta",
}
let isMarried = ""
if (person.isMarried){
    isMarried = "Sudah menikah"
} else {
    isMarried = "belum menikah"
}
console.log(person)
console.log(`Hallo perkenalkan nama saya ${person.name} usia saya saat ini sebetulnya 23 namun sebentar lagi ${person.age} dan saat ini saya ${isMarried}, salam kenal kawan kawan`)
console.log(`Saat ini saya tinggal di ${person["tempat tinggal"]}`)
//change value object
person.name = "FADILLAH ARIF RIZKI MUHAMAD"
person["tempat tinggal"] = "Bandung"
console.log(`saya mengubah isi nilai dari name dengan hasil ${person.name} dan insyaallah saya mungkin akan tinggal di ${person["tempat tinggal"]} jika mendapatkan perkerjaan disana`)
//add key and value. 
person.skill = "Golang, and NodeJS"
console.log(person)
//delete key and value in object
delete person.skill
console.log(person)
