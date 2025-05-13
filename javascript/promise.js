let success=true
let myPromise=new Promise((resolve,reject)=>{
    if (success){
        resolve('Promise Resolved')

    }
    else{
        reject('Promise Rejected')
    }
})
myPromise
.then((result)=>console.log(result))
.catch((error)=>console.log(error))
console.log('hello')