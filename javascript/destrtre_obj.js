// let user={name:'Athul',age:21,place:'Kottayam'}
// let {name:Username,age:Userage,place:Userplace}=user

// console.log(Username)
// console.log(Userage)
// console.log(Userplace)

let user={name:'Athul',age:21,place:{
    District:'Kottatam',
    State:'Kerala'
}}
let {name,age,place:{District,State}}=user
console.log(name)
console.log(age)
console.log(District)
console.log(State)
