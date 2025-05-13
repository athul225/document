//Spread Operators//

let numbers=[1,2,3]
let rest=sum(...numbers)
console.log(rest)



//Rest Operators//

function sum(...arr1){
    console.log(arr1)
}
sum(1,2,3,4,5)