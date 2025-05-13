//forEach build in fn//
let arr=[1,2,3,4,5]
newarr=[...arr]

    arr.forEach((values,index,array)=>{
    console.log(`${index} : ${(values)}`)
    newarr[index]=values*values
})
console.log(newarr)
