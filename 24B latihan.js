console.log("Jawaban 1 :");
let soal1 = (a,b) => a+b;
console.log(soal1(10,9));
console.log("Jawaban 2: ");
function soal2(...parameter){
    let result = 0;
    for (let range of parameter){
        result +=range;
    }
    result /= parameter.length
    return result
};
console.log(soal2(7,8,7,6,9,10,9,8));
console.log("Jawaban 3: ")
let soal3 = (...parameter) =>{ return parameter.length;}
console.log(soal3("muhamad","Rizki","Arif","Fadillah"))
console.log("Jawaban 4: ")
function soal4(...parameter){
    let result = parameter[0]
    for (let index = 0; index < parameter.length; index++) {
        let temp = parameter[index]
        if (result<temp){
            result=temp
        }
    }
    return result
};
console.log(soal4(20,11,51,32,22,222,32,12,15));
let soal5 = any => {
    return any.length
};
console.log("Jawaban 5:")
console.log(soal5("Muhamad Rizki Arif Fadillah"));
console.log("Jawaban 6:")
function soal6(...params) {
    params.sort((a,b)=> a -b);
    const midindex = Math.floor(params.length/2)
    return params.length %2 !== 0 ? params[midindex] : (params[midindex-1]+params[midindex]/2)
}
console.log(soal6(1,2,3,4,5,6,7,10));