//set akan menghapus jika didalah 1 set memiliki nilai yang sama.
let myset = new Set([1,2,4,6,2,1])
console.log(myset)
//menambahkan nilai kedalam set. jika tidak ada nilai yang sama dimasukan jika ada yang sama diabaikan
myset.add(10);
console.log(myset)
myset.add(6);
console.log(myset)
//menghapus nilai didalam set
myset.delete(1)
console.log(myset)
