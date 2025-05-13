let p1=new Promise((resolve,reject)=>setTimeout(()=>reject('Task 1 incomplete'),1000))
let p2=new Promise((resolve)=>setTimeout(()=>resolve('Task 2 complete'),2000))
let p3=new Promise((resolve)=>setTimeout(()=>resolve('Task 3 complete'),3000))

Promise.all([p1,p2,p3])
.then((result)=>console.log(result))
.catch((error)=>console.log(error))