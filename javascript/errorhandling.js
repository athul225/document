// try{
//     console.log(x)
// }
// catch(error){
//     console.log(error.message)
// }
// finally{
//     console.log('Program Executed Successfully')
// }

function doVote(age){
    if(age<18){
        throw new Error('You are not eligible for Votting')
    }
    else{
        console.log('Eligible for Votting')
    }
}
try{
    doVote(20)
}
catch(error){
    console.log('Error occured :',error.message)
}
finally{
    console.log("Program successfull completed")
}
