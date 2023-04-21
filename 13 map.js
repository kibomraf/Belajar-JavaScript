//map sederhana
const mymap = new Map();
//map inisialisasi
const mymap2 = new Map([
["key","value"],
[1,"februari"]
])
console.log(mymap2)
//mendapatkan value lewat key
console.log(mymap2.get("key"))
console.log(mymap2.get(1))
//menambah key and value
mymap2.set("nama","Rizki");
console.log(mymap2.get("nama"))
//wrong inisiasi map karena fitur seperti has dan delete tidak bisa digunakan karena itu tidak tersimpan
//didalam query map 
mymap2["Rizki"] = ["arif"]
//benar bisa didedaklariskan cuman seperti yang dikatakan sebelumnya.
