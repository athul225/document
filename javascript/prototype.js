function myButton(name){
    this.button=document.createElement('button')
    this.button.innerHTML=name
    document.body.appendChild(this.button)
}
myButton.prototype.clickable=function(fn){
    this.button.onclick=fn
}
let ob2=new myButton('Submit')
console.log(ob2)
function clicking(){
    console.log('clicked')
}
ob2.clickable(clicking)