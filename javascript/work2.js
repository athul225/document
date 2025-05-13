let ptag=document.getElementById('main')
let timer=setTimeout(()=>(
    ptag.interHTML='your button is Disappeared'
),5000)
console.log()
let span=document.getElementById('span')
let i=4
let interval=setInterval(()=>{
    span.innerHTML=i
    console.log(i)
    i--
    if(i==-1){
        clearInterval(interval)
    }
},1000)
let mainpara=document.getElementById('mainpara')
document.getElementById('btn').addEventListener('click',()=>{
    clearTimeout(timer)
    clearInterval(interval)
    mainpara.innerHTML='You saved the button'
})