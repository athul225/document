var stud1={
    name:"alan",
    YOB:2004,
    getAge:function(){
        return new Date().getFullYear()-this.YOB
    },
    getName:function(){
        return this.name
    }
}
console.log(stud1.getAge())


class Student{
    constructor(name,year){
        this.name=name
        this.year=year
    }
    getAge(){
        return new Date().getFullYear()-this.year
    }
    getName(){
        return this.name
    }
}
let std1=new Student('amal',2001)
console.log(std1.getAge())
console.log(std1.getName())