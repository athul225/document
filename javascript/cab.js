//call//

let obj={
    name:'Vysakh',
}
let greet=function(role,department){
    console.log(`Helo ${this.name} you are a ${role} in ${department} department`)

}
greet.call(obj,'developer','python')

//apply//

let obj1={
    name:'Vysakh',
}
let greet1=function(role,department,message){
    console.log(`Helo ${this.name} you are a ${role} in ${department} department ${message}`)
}



const newfunction=greet.bind