let array = ["Muhamad","Rizki",23,"Purwakarta"]
for (let a = 0; a < array.length;a++){
    console.log(array[a])
}
console.log(array.length)
//add value to array
array.push(`Jawa Barat`)
for (let a = 0; a < array.length;a++){
    console.log(array[a])
}
//mengeluarkan data terakhir diarray
array.pop()
for (let a = 0; a < array.length;a++){
    console.log(array[a])
}
//mengeluarkan data awal diarray
array.shift()
for (let a = 0; a < array.length;a++){
    console.log(array[a])
}
//menambahkan data di awal array
array.unshift('Ahmad')
for (let a = 0; a < array.length;a++){
    console.log(array[a])
}
//mengosong satu nilai dari sebuah aray
delete array[3]
for (let a = 0; a < array.length;a++){
    console.log(array[a])
}
//menghapus nilai dari suatu nilai awal
array.splice(2,1) //menghapus satu nilai dari indeks ke dua
for (let a = 0; a < array.length;a++){
    console.log(array[a])
}
//bisa juga untuk digunakan menambahkan suatu nilai di dalam array
array.splice(1,0,"Muhamad Rizki Arif fadillah")
for (let a = 0; a < array.length;a++){
    console.log(array[a])
}