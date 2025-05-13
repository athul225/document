// let arr=[1,2,3]
// let [a,b,c]= arr

// console.log(a)
// console.log(b)
// console.log(c)


// let arr=[1,,3,4,5]
// let [a,b,c]= arr
// console.log(a)
// console.log(b)
// console.log(c)

let arr=[1,[2,3],4,5]
let [a,b,c,...remaining]= arr
console.log(a)
console.log(b)
console.log(c)


