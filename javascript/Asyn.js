// console.log('Task 1')
// setTimeout(()=>{
//     console.log('task 2');

// },3000)
// console.log('task 3')


// let button=document.getElementById('btn')
// button.addEventListener('click',function(){
//     clearTimeout(timer)
//     console.log('timer Cleared')
// })


let i=1
let interval=setInterval(()=>{
    
    console.log(i);
    i++
    if(i==11){
        clearInterval(interval)
    }

},1000)
let button=document.getElementById('btn').addEventListener('click',function(){
    clearInterval(interval)
})

let