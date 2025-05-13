class Novavi{
    constructor(name){
        this.name=name
    }
    software_devs(){
        console.log(this.name)
        console.log("Novavi's Devs")
    }
}
class Synnefo extends Novavi{
    constructor(name,branch){
        super(name)
        this.branch=branch
    }
    teaching(){
        console.log(this.branch)
        console.log("Teaching students to become Devs")
    }
}
let Std=new Synnefo('amal','EKM')
Std.teaching()
Std.software_devs()