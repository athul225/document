arr=[{id:1,name:'Athul',age:21},{id:2,name:'Martin',age:21}]

newarr=arr.find(value=>value.id==2)
if(newarr){
    console.log(newarr)
    console.log('user is found')
}
else{
    console.log('user is not found')
}


