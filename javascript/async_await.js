async function fetchData (){
    try{
        let response = await fetch('')
        let data = await response.json()
        console.log(data)

        console.log('helo')

    }
    catch(error){
        console.log(error)
    }
}
fetchData()