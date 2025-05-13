class Button{
    constructor(name){
        this.button=document.createElement('button')
        this.button.textContent=name
        document.body.appendChild(this.button)
        this.button2=document.getElementById('btn')
    }
    set width(width){
        this.button.style.width=width+'px'
    }
    set height(height){
        this.button.style.height=height+'px'
    }
    get width(){
        return parseInt(this.button.style.width)
    }
    get height(){
        return parseInt(this.button.style.height)
    }
}
let btn1=new Button('click me')
btn1.width=100
btn1.height=100
console.log(btn1.getheight,btn1.getwidth)