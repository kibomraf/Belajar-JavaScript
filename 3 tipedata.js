let a;
console.log(typeof(a));
let b = 10;
console.log(typeof(b));
let c = 99.99
console.log(typeof(c));
//operator math
//plus
let d = 9
let e = 3
console.log(d + e);
//minus
console.log(d - e);
//multiply
console.log(d * e);
//divide
console.log(d / e);
//modulus
console.log(d % e);
//exponent // perpangkatan
console.log(d ** e);
//increment
d++;
console.log(d);
//decrement
e--;
console.log(e);
//increment
let f = 100
console.log("mencetak sebelum increment : ",f++,"mencetak seteleh increment : ",f);
console.log(++f);
let g = 99
console.log("mencetak sebelum decrement : ",g--,"mencetak seteleh decrement : ",g);
console.log(--g);
//bigint
let h = 1000000000000000000000000000000000000000000000000000000000000000n;
let j = BigInt(10000000)
console.log(typeof(h));
console.log(typeof(j));
//string
let k = "Hello world"
console.log(k);
console.log(typeof(k));
let l = '"mau kemana ? mau kesana"';
console.log(l);
// error let m = '"i think it's awasome"'
let m = '"i think it\'s awasome"'
console.log(m);
let path = "Windows path: c:\\Program Files (x86)\\MyProject"
console.log(path);
let firstname = "Kibo"
let lastname = "Bokir"
let fullname = firstname + lastname
console.log(fullname);
//boolean
let n = true
console.log(n);
let o = false
console.log(o);
console.log(typeof(n),typeof(o))
//null
let p = null
console.log(p);
console.log(typeof(p));
//symbol
const q = Symbol("id")
const r = Symbol("id")
console.log(q==r);
console.log(typeof(q),typeof(r));
//
let nama = "Muhamad Rizki"
console.log(`Hallo Nama saya ${nama}`)